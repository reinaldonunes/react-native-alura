import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from "./src/componentes/Nota"
//import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Picker } from '@react-native-picker/picker';
import { showNotes, createTable, filterByCategory } from "./src/services/Notes"

export default function App() {

  useEffect(() => {
    createTable()
    getAllNotes()
  }, [])

  const [selectedNote, setSelectedNote] = useState({})
  const [notes, setNotes] = useState([])
  const [category, setCategory] = useState("Pessoal")

  async function getAllNotes(){
    const allNotes = await showNotes()

    // USING ASYNC STORAGE
    //const allNotesKeys = await AsyncStorage.getAllKeys()
    //const allNotes = await AsyncStorage.multiGet(allNotesKeys)

    setNotes(allNotes)
  }

  async function applyFilter(selectedCategory){
    setCategory(selectedCategory)
    if(selectedCategory == "Todos"){
      getAllNotes()
    }else{
      setNotes(await filterByCategory(selectedCategory))
    }
  }

  /* USING ASYNC STORAGE
  async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage limpo com sucesso!");
    } catch (error) {
      console.error("Erro ao limpar AsyncStorage:", error);
    }
  } 
*/

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList 
      data={notes}
      renderItem={({ item }) => <Nota item={item} setSelectedNote={setSelectedNote}/>}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => {return (
        <View style={estilos.picker}>
            <Picker selectedValue={category} onValueChange={(selectedCategory) => applyFilter(selectedCategory)}>
              <Picker.Item label="Todos" value="Todos"/>
              <Picker.Item label="Pessoal" value="Pessoal"/>
              <Picker.Item label="Trabalho" value="Trabalho"/>
              <Picker.Item label="Outros" value="Outros"/>
            </Picker>
            {notes.length === 0 && <Text style={estilos.notFound}>Não há itens para exibir</Text>}
          </View>
        )}}/>
      <NotaEditor showNotes={getAllNotes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
  notFound: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    fontSize: 18,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 16,
    color: '#856404',
    backgroundColor: '#fff3cd'
  }
})
