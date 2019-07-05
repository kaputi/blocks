import React from 'react';
import { View } from 'react-native';

import GameArea from 'containers/GameArea'
import FillBlocks from 'components/FillBlocks'
import Controller from 'containers/Controller'

import styles from './Main.styles'

const Main = () =>{
  console.log('main container')
  return(
    
    <View style={styles.MainWrapper}>
      <View>
        <View style={{flexDirection:'row'}}>
          <FillBlocks width={1} height={18} />
          <GameArea/>
          <FillBlocks width={2} height={18} />
          <View>
            <FillBlocks width={4} height={3} />
            {/* TODO: score, next piece,etc  */}
          </View>
          <FillBlocks width={1} height={18} />
        </View>
        <FillBlocks width={18} height={1} />
      </View>
      <View>
        <Controller />
      </View>
    </View>
  )
}

export default Main