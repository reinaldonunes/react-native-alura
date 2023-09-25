import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

import star from "../assets/estrela.png"
import starNull from "../assets/estrelaCinza.png"

export default function StarItem({
    onPress,
    disabled = true,
    filled,
    isBig = false
  }){
  const style = styleFunction(isBig)
  
  const getImage = () => {
    if (filled){
      return star 
    }
    return starNull
  }

  return <TouchableOpacity
    onPress={onPress}
    disable={disabled}
  >
    <Image source={getImage()} style={style.star} />
  </TouchableOpacity>
}

const styleFunction  = (isBig) => StyleSheet.create({
  star: {
    width: isBig ? 36 : 18,
    height: isBig ? 36 : 18,
    marginRight: 2
  }
})