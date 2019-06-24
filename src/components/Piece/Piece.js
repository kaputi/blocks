import React from 'react'
import { View } from 'react-native'
import T from 'prop-types'

import Block from 'components/Block'

import styles from './Piece.styles'

const Piece = (props) => {
  const { pixelMap, color } = props
  const blocks = pixelMap.map((coordPair, index) => (
    <Block key={index} color={color} x={coordPair[0]} y={coordPair[1]} /> // eslint-disable-line react/no-array-index-key
  ))
  return <View style={styles.PieceWrapper}>{blocks}</View>
}

Piece.propTypes = {
  pixelMap: T.array.isRequired,
  color: T.string.isRequired,
}

export default Piece
