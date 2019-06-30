import React, { Component } from 'react'
import { View } from 'react-native'
import T from 'prop-types'
import styles from './Block.styles'

class Block extends Component {
  static propTypes = {
    color: T.string.isRequired,
    x: T.number.isRequired,
    y: T.number.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    const { x, y } = this.props
    const nextX = nextProps.x
    const nextY = nextProps.y

    if (x === nextX && y === nextY) return false

    return true
  }

  componentDidUpdate() {
    // console.log('block update')
  }

  render() {
    const { color, x, y } = this.props

    return (
      <View style={[styles.BlockWrapper, { top: y, left: x }]}>
        <View style={[styles.block, { backgroundColor: color }]}></View>
      </View>
    )
  }
}

export default Block
