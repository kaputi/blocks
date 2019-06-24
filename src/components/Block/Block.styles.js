import { StyleSheet } from 'react-native'

import blockSize from 'utils/blockSize'

const styles = StyleSheet.create({
  BlockWrapper: {
    width: blockSize,
    height: blockSize,
    position: 'absolute',
    padding: 1,
  },
  block: {
    flex: 1,
  },
})

export default styles
