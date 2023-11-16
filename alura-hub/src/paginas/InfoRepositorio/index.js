import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';

import { atualizarRepositorio, removerRepositorio } from '../../services/requests/repos';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function updateRepo(){
        const result = await atualizarRepositorio(
            route.params.item.postId,
            nome, 
            data,
            route.params.item.id
        )

        if(result){
            Alert.alert("Repositório atualizado!")
            navigation.goBack()
        }else{
            Alert.alert("Erro ao atualizar repositório.")
        }
    }

    async function deleteRepo(){
        const result = await removerRepositorio(
            route.params.item.id
        )

        if(result){
            Alert.alert("Repositório removido!")
            navigation.goBack()
        }else{
            Alert.alert("Erro ao remover repositório.")
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
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={updateRepo}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]}
                onPress={deleteRepo}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
