import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import ContentText from "./ContentText"

export default function ActionButton( {text, onPress} ){
  return <>
    <TouchableOpacity style={styles.button}>
      <ContentText style={styles.buttonText}>{ text } </ContentText>
    </TouchableOpacity>
  </> 
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#2A9F85"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
})