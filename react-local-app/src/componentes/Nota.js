import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Nota({ item, setSelectedNote }) {
  const categorias = {Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB"}
  const estilos = styleFunction(categorias[item.category])
  
  return (
    <TouchableOpacity style={estilos.cartao} onPress={() => setSelectedNote(item)}>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.categoria}>{item.category}</Text>
      <Text style={estilos.texto} numberOfLines={5}>{item.description}</Text>
    </TouchableOpacity>
  )
}

const styleFunction = (cor) => StyleSheet.create({
  cartao: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: cor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  categoria: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
  texto: {
    lineHeight: 28,
  }
})
