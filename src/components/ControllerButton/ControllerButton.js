import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import T from 'prop-types'

import styles from './ControllerButton.styles'

const ControllerButton = (props) => {
  const { tapHandler, holdHandler, releaseHandler, type } = props
  let icon = null

  // TODO: Change the icon
  switch (type) {
    case 'left':
      icon = 'left'
      break
    case 'right':
      icon = 'right'
      break
    case 'down':
      icon = 'down'
      break
    case 'cw':
      icon = 'clock-wise'
      break
    case 'ccw':
      icon = 'counter-clock-wise'
      break
    case 'pause':
      icon = 'pause'
      break
    default:
      break
  }

  return (
    <View style={styles.ControllerButtonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPressIn={tapHandler}
        onLongPress={holdHandler}
        onPressOut={releaseHandler}
        delayLongPress={300}
      >
        {/* TODO: icon */}
      </TouchableOpacity>
    </View>
  )
}

ControllerButton.propTypes = {
  tapHandler: T.func.isRequired,
  holdHandler: T.func,
  releaseHandler: T.func,
  type: T.oneOf(['left', 'right', 'down', 'cw', 'ccw', 'pause']).isRequired,
}

ControllerButton.defaultProps = {
  holdHandler: null,
  releaseHandler: null,
}

export default ControllerButton
