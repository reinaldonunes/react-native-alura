import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles/statusCartStyle'
import Button from './Button'

export default function StatusCart({ total }){
    return <View style={styles.content}>
        <View style={styles.total}>
            <Text style={styles.description}>Total do Carrinho:</Text>
            <Text style={styles.value}>
                {
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(total)
                }
            </Text>
        </View>
        <View style={styles.button}>
            <Button value='Concluir Pedido' inversed />
        </View>
    </View>
}