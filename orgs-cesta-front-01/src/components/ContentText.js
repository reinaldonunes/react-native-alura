import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ContentText( {children, style} ){
  let txtWeight = styles.txtRegular;

  if(style?.fontWeight === "bold"){
    txtWeight = styles.txtBold
  }
  
  return <Text style={[style, txtWeight]}>{ children } </Text>
}

const styles = StyleSheet.create({
  txtRegular:{
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },
  txtBold:{
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  }
})