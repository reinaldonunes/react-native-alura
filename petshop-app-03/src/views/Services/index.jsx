import React from 'react'
import { FlatList, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import Item from '../../components/Item'

const services = [
  {
    id: 1,
    name: 'Banho',
    price: 79.9,
    description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar, deixa com a gente!',
  },
  {
    id: 2,
    name: 'Vacina V4',
    price: 89.45,
    description: 'Uma dose da vacina V4. Seu gato precisa de pelo menos duas.',
  },
  {
    id: 3,
    name: 'Vacina Antirrábica',
    price: 105.6,
    description: 'Uma dose da vacina antirrábica. Seu gato precisa de pelo menos quatro.',
  },
]

export default function Services(){
  return(
    <>
      <FlatList
        data={services}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item}  /> }
        keyExtractor={({id}) => String(id)}
      /> 
    </>
  )
}