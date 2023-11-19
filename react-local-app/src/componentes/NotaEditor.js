import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
//import AsyncStorage from "@react-native-async-storage/async-storage"
//import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker';
import { addNote, removeNote, updateNote } from "../services/Notes";

export default function NotaEditor({showNotes, selectedNote, setSelectedNote}) {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] =  useState("Pessoal")
  const [texto, setTexto] = useState("")
  const [modalVisivel, setModalVisivel] = useState(false)
  const [noteToUpdate, setNoteToUpdate] = useState(false)

  useEffect(() => {
    if(selectedNote.id){
      setNoteToModal()
      setModalVisivel(true)
      setNoteToUpdate(true)
      return
    }
    setNoteToUpdate(false)
  }, [selectedNote])

  async function saveNote(){
    const note = {
      title: titulo,
      category: categoria,
      description: texto
    }

    await addNote(note)
    //await AsyncStorage.setItem(note.id, note.description)

    showNotes()
    clearModal()
    Alert.alert("Nota criada com sucesso!")
  }

  async function putNote(){
    const note = {
      title: titulo,
      category: categoria,
      description: texto,
      id: selectedNote.id
    }

    await updateNote(note)
    showNotes()
    clearModal()
    Alert.alert("Nota atualizada com sucesso!")
  }

  async function deleteNote(){
    await removeNote(selectedNote)
    Alert.alert("Nota removida com sucesso!")
    clearModal()
    showNotes()
  }

  function setNoteToModal(){
    setTitulo(selectedNote.title)
    setCategoria(selectedNote.category)
    setTexto(selectedNote.description)
  }

  function clearModal(){
    setTitulo("")
    setCategoria("Pessoal")
    setTexto("")
    setModalVisivel(false)
    setSelectedNote({})
  }

  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {setModalVisivel(false)}}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Criar nota</Text>
              <Text style={estilos.modalSubTitulo}>Título da Nota</Text>
              <TextInput 
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={novoTitulo => setTitulo(novoTitulo)}
                placeholder="Digite um título"
                value={titulo}/>
              <Text style={estilos.modalSubTitulo}>Categoria</Text>
              <View style={estilos.modalPicker}>
                <Picker 
                  selectedValue={categoria}
                  onValueChange={novaCategoria => setCategoria(novaCategoria)}
                >
                  <Picker.Item label="Pessoal" value="Pessoal" />
                  <Picker.Item label="Trabalho" value="Trabalho" />
                  <Picker.Item label="Outros" value="Outros" />
                </Picker>
              </View>
              <Text style={estilos.modalSubTitulo}>Conteúdo da nota</Text>
              <TextInput 
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={novoTexto => setTexto(novoTexto)}
                placeholder="Digite aqui seu lembrete"
                value={texto}/>
              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => noteToUpdate ? putNote() : saveNote() }>
                  <Text style={estilos.modalBotaoTexto}>{ noteToUpdate ? 'Atualizar' : 'Salvar' }</Text>
                </TouchableOpacity>
                {
                  noteToUpdate && 
                  <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => {deleteNote()}}>
                  <Text style={estilos.modalBotaoTexto}>Excluir</Text>
                </TouchableOpacity>
                }


                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => {clearModal()}}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => {setModalVisivel(true)}} style={estilos.adicionarMemo}>
        <Text style={estilos.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9A94",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitulo: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#2ea805",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#d62a18",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#057fa8",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  adicionarMemo: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  adicionarMemoTexto: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  }
});
