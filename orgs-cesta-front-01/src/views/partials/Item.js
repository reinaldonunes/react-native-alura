import React from "react";
import { View, Image, StyleSheet } from "react-native"

import ContentText from "../../components/ContentText";

export default function Item({ item: { productImage, productName } }){
  return <View style={ styles.item}>
      <Image source={ productImage } style={styles.thumb} />
      <ContentText key={productName} style={styles.product}>{ productName }</ContentText>
    </View>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    padding: 16,
    marginHorizontal: 16
  },
  thumb: {
    width: 46,
    height: 46,
    marginRight: 16
  },
  product: {
    fontSize: 20,
    color: "#464646"
  }


})