import React from 'react'
import { View } from 'react-native'
import T from 'prop-types'

import blockSize from 'utils/blockSize'

import Block from 'components/Block'

import styles from './FillBlocks.style'

const FillBlocks = (props) => {
  const { width, height } = props

  const blockArray = []

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      blockArray.push(<Block key={`${x}${y}`} x={x * blockSize} y={y * blockSize} color="gray" />)
    }
  }

  return (
    <View
      style={[
        styles.FillBlocksWrapper,
        { width: width * blockSize, height: height * blockSize },
      ]}
    >
      {blockArray}
    </View>
  )
}

FillBlocks.propTypes = {
  width: T.number.isRequired,
  height: T.number.isRequired,
}

export default FillBlocks
