import React, { Component } from 'react'
import { View } from 'react-native'
import T from 'prop-types'
import { connect } from 'react-redux'

import blockSize from 'utils/blockSize'
import { calculatePiece } from 'utils/pieceFunctions'
import {
  MOVE_FINISH,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_DOWN,
  MOVE_CW,
  MOVE_CCW,
} from 'constants/moveTypes'

import {
  setPiece,
  updatePlacedBlocks,
  clearBlocks,
  moveAction,
} from 'actions/piece.actions'

import Piece from 'components/Piece'
import Block from 'components/Block'

import styles from './GameArea.styles'

class GameArea extends Component {
  static propTypes = {
    id: T.number,
    x: T.number,
    y: T.number,
    position: T.number,
    pixelMap: T.arrayOf(T.arrayOf(T.number)),
    coordMap: T.arrayOf(T.arrayOf(T.number)),
    color: T.string,
    placedBlocks: T.arrayOf(T.object),
    move: T.string,
    holdMove: T.string,
  }

  static defaultProps = {
    id: 0,
    x: 4,
    y: 0,
    position: null,
    pixelMap: null,
    coordMap: null,
    color: 'yellow',
    placedBlocks: [],
    move: MOVE_FINISH,
    holdMove: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      gameInterval: null,
      moveInterval: null,
    }
  }

  componentWillMount() {
    const currentPiece = calculatePiece()

    this.props.setPiece(currentPiece) // eslint-disable-line

    this.setState({
      gameInterval: setInterval(()=>this.move(MOVE_DOWN),400),
    })
  }

  componentDidUpdate = () => {
    const { move, holdMove  } = this.props
    
    const {moveInterval} = this.state

    if (move !== MOVE_FINISH) this.move(move)
    if (holdMove && !moveInterval) this.holdMovement(holdMove)
    if (!holdMove && moveInterval) this.stopMovement()
    
  }
  

  move(direction) {
    const { id, position, x, y } = this.props
    let newX = x
    let newY = y
    let newPosition = position

    switch (direction) {
      case MOVE_DOWN:
        newY += 1
        break
      case MOVE_LEFT:
        newX -= 1
        break
      case MOVE_RIGHT:
        newX += 1
        break
      case MOVE_CW:
        newPosition += 1
        if (newPosition > 3) newPosition = 0
        break
      case MOVE_CCW:
        newPosition -= 1
        if (newPosition < 0) newPosition = 3
        break
      default:
        break
    }

    const updatedPiece = calculatePiece({
      id,
      position: newPosition,
      x: newX,
      y: newY,
    })
    const { coordMap } = updatedPiece

    const collision = this.checkCollision(coordMap)

    if (collision && direction === MOVE_DOWN) this.placePiece()

    if (!collision) this.props.setPiece(updatedPiece) // eslint-disable-line

    this.props.moveAction(MOVE_FINISH) // eslint-disable-line
  }

  holdMovement(direction) {
    this.setState({moveInterval: setInterval(()=> this.move(direction), 200)})
  }

  stopMovement() {
    const {moveInterval} = this.state
    clearInterval(moveInterval)
  }

  checkCollision(coordMap) {
    const { placedBlocks } = this.props
    // [[x,y],[x,y],[x,y],[x,y]] coord map
    // [{x,y,color},{x,y,color}]

    let collision = false
    let outOfBoundries = false

    coordMap.forEach((coordPair) => {
      placedBlocks.forEach((block) => {
        const { x, y } = block
        if (coordPair[0] === x && coordPair[1] === y) collision = true
      })

      if (coordPair[0] < 0 || coordPair[0] > 9) outOfBoundries = true
      if (coordPair[1] > 17) outOfBoundries = true
    })

    if (outOfBoundries || collision) return true

    return false
  }

  placePiece() {
    const { coordMap, color } = this.props

    const placedBlocks = coordMap.map((coordPair) => ({
      x: coordPair[0],
      y: coordPair[1],
      color,
    }))

    const newPiece = calculatePiece()
    this.props.setPiece(newPiece) // eslint-disable-line
    this.props.updatePlacedBlocks(placedBlocks) //eslint-disable-line

    this.clearRows()
  }

  clearRows() {
    const { placedBlocks } = this.props

    let total = 0

    const remainingBlocks = []

    for (let i = 0; i < 18; i++) {
      // 18 rows

      const row = placedBlocks.filter((block) => block.y === i)

      if (row.length < 10) {
        row.forEach((block) => {
          remainingBlocks.push(block)
        })
      } else {
        total++
        // lower blocks ontop
        remainingBlocks.forEach((block, index) => {
          const { y } = remainingBlocks[index]
          remainingBlocks[index] = { ...remainingBlocks[index], y: y + 1 }
        })
      }
    }
    this.props.clearBlocks(remainingBlocks) // eslint-disable-line
    // TODO: update score
    console.log('total: ', total)
    this.gameOver(remainingBlocks)
    
  }

  gameOver(blocks) {
    blocks.forEach((block) => {
      const { y } = block
      if(y === 0) {
        const {gameInterval} = this.state
        clearInterval(gameInterval)
      }
    })
  }

  render() {
    const { pixelMap, color, placedBlocks } = this.props
    let piece = null
    if (pixelMap && color) piece = <Piece pixelMap={pixelMap} color={color} />

    const placedArray = placedBlocks.map((block, index) => {
      const pixelX = block.x * blockSize
      const pixelY = block.y * blockSize

      return <Block key={index} color={block.color} x={pixelX} y={pixelY} /> // eslint-disable-line react/no-array-index-key
    })

    return (
      <View
        style={[
          styles.GameAreaWrapper,
          {
            width: blockSize * 10,
            height: blockSize * 18,
          },
        ]}
      >
        {piece}
        {placedArray}
      </View>
    )
  }
}

const mapStateToProps = ({ piece, game }) => {
  const {
    id,
    color,
    x,
    y,
    position,
    pixelMap,
    coordMap,
    placedBlocks,
    move,
    holdMove,
  } = piece

  const { gameState } = game

  return {
    // piece reducer
    id,
    color,
    x,
    y,
    position,
    pixelMap,
    coordMap,
    placedBlocks,
    move,
    holdMove,
    // game reducer
    gameState,
  }
}

export default connect(
  mapStateToProps,
  { setPiece, updatePlacedBlocks, clearBlocks, moveAction }
)(GameArea)
