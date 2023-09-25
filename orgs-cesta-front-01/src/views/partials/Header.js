import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topImage from "../../../assets/topo.png";
import ContentText from "../../../src/components/ContentText"

const width = Dimensions.get('screen').width

export default function Header({headName}){
  return <>
    <Image source={topImage} style={styles.topImage} />
    <ContentText style={styles.titleApp}>{headName}</ContentText>
  </>
}

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: 578 / 768 * width
  },
  titleApp: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    color: "white",
    padding: 16
  }
})