import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { adicionarRepositorio } from '../../services/requests/repos';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    console.log(route.params)

    async function addRepo(){
        const result = await adicionarRepositorio(
            route.params.id,
            nome,
            data,
        )
        
        if(result){
            Alert.alert("Repositório adicionado com sucesso!")
            navigation.goBack()
        }else{
            Alert.alert("Não foi possível criar o repositório.")
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao} onPress={addRepo}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
