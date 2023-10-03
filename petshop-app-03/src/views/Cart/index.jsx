import React from 'react'
import { FlatList } from 'react-native'
import ItemCart from '../../components/ItemCart'
import StatusCart from '../../components/StatusCart'

const services = [
  {
    id: 1,
    name: 'Banho',
    price: 79.9,
    description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar, deixa com a gente!',
    amount: 1
  },
  {
    id: 2,
    name: 'Vacina V4',
    price: 89.45,
    description: 'Uma dose da vacina V4. Seu gato precisa de pelo menos duas.',
    amount: 4
  },
  {
    id: 3,
    name: 'Vacina Antirrábica',
    price: 105.6,
    description: 'Uma dose da vacina antirrábica. Seu gato precisa de pelo menos quatro.',
    amount: 9
  },
]

export default function Cart(){
  const totalItemsList = services.length - 1

  const totalCart = services.reduce((sum, { price, amount}) => sum + ( price * amount) , 0)

  return(
    <>
        <StatusCart total={totalCart} />
        <FlatList
          data={services}
          removeClippedSubviews={false}
          renderItem={({ item, index}) => <ItemCart {...item} showSeparator={totalItemsList != index } /> }
          keyExtractor={({id}) => String(id)}
        /> 
    </>
  )
}