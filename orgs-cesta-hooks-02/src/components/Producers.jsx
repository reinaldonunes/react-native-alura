import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Card from '../components/Card'
import useProducers from '../hooks/useProducers'

export default function Producers({ header: Header }){
    const [title, list] = useProducers()

    const HeaderList = () => {
        return <>
            <Header />
            <Text style={style.title}>{ title }</Text>
        </>
    }

    return <FlatList
            data={list}
            renderItem={({item}) => <Card {...item} />}
            keyExtractor={({ name }) => name }
            ListHeaderComponent={HeaderList}
            style={style.container}>
    </FlatList>
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginTop: 16,
        fontWeight: "bold", 
        color: "#464646",
        paddingHorizontal: 16
    },
    items: {

    }
})