import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import StarItem from './StarItem'

export default function Stars({
  quantaty: oldQuantaty,
  editable = false,
  isBig = false
}){

  const [ quantaty, setQuantaty] = useState(oldQuantaty)

  const RenderStars = () => {
    const starsList = []
    for(let i = 0; i < 5; i++){
      starsList.push(
        <StarItem 
          onPress ={() => setQuantaty(i + 1)}
          disabled = {!editable}
          filled = { i < quantaty }
          isBig = {isBig}
          key={i}
        />
      )
    }

    return starsList
  }

  return <View style={style.wrapStars}>
    <RenderStars />
  </View> 
}

const style = StyleSheet.create({
  wrapStars: {
    flexDirection: "row"
  }
})