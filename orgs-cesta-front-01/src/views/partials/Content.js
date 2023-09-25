import React from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";

import ContentText from "../../../src/components/ContentText"
import ActionButton from "../../components/ActionButton";

export default function Content({nameCesta, fromFarm, description, price, brand, button}){
  return <>
    <ContentText style={styles.nameCesta}>{nameCesta}</ContentText>
      <View style={styles.rowFarm} >
        <Image source={brand} style={styles.imgFarm} />
        <ContentText style={styles.fromFarm}>{fromFarm}</ContentText>
      </View>
      <ContentText style={styles.labelCesta}>{description}</ContentText>
      <ContentText style={styles.priceCesta}>{price}</ContentText>

      <ActionButton text={button} onPress={() => {}} />
  </>
}


const styles = StyleSheet.create({
  rowFarm: {
    flexDirection: "row",
    paddingVertical: 12
  },
  nameCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
  },
  imgFarm: {
    width: 32,
    height: 32,
    marginRight: 12
  },
  fromFarm: {
    fontSize: 16,
    lineHeight: 26
  },
  labelCesta: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26
  },
  priceCesta: {
    color: "#2a9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})