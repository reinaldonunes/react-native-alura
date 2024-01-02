import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { AuthContext } from "../../contexts/AuthContext";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { temaEscolhido } = useContext(TemaContext)
  const { login } = useContext(AuthContext)

  const estilo = estilos(temaEscolhido)

  async function logarNoSistema(){
    const result = await login(email, senha)
    if(result === 'ok'){
      navigation.navigate('Principal')
    }else{
      alert(result)
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logarNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

