import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Header from "./partials/Header";
import Content from "./partials/Content";
import Item from "./partials/Item"

import ContentText from "../components/ContentText";

export default function Cesta({headApp, details, items}){
  return <>
    <FlatList
      data={items.list}
      renderItem = {Item}
      keyExtractor={({productName }) => productName}
      ListHeaderComponent={() => {
        return <>
          <Header {...headApp} />
          <View style={styles.wrapCesta}>
            <Content {...details} />
            <ContentText style={styles.title}>{ items.title }</ContentText>
          </View> 
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  wrapCesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
})