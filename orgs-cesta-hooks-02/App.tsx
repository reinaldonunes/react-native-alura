import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import Index from './src/views/home/index'

function App(){
  return <SafeAreaView style={style.areaView}>
    <Index />
  </SafeAreaView>
}

const style = StyleSheet.create({
  areaView: {
    flex: 1
  }
})

export default App