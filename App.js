import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import Main from 'containers/Main'

import store from 'src/store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  // store.subscribe(() => console.log(store.getState()))
  console.log('==================================')
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  )
}
export default App
