import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from "./src/componentes/Nota"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export default function App() {

  const [notes, setNotes] = useState([])

  async function getAllNotes(){
    const allNotesKeys = await AsyncStorage.getAllKeys()
    const allNotes = await AsyncStorage.multiGet(allNotesKeys)

    setNotes(allNotes)
  }

  async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage limpo com sucesso!");
    } catch (error) {
      console.error("Erro ao limpar AsyncStorage:", error);
    }
  } 
  
  useEffect(() => { 
    clearAsyncStorage()
    getAllNotes()
  }, [])

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList 
        data={notes}
        renderItem={({ item }) => <Nota description={item[1]} />}
        keyExtractor={(item) => item[0]}
      />
      <NotaEditor showNotes={getAllNotes}/>
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
})
