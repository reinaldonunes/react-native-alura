import { Text, View} from "react-native";

import styles from '../../styles/itemStyle'
import Field from "./Field"
import Button from './Button'
import { useState } from "react";

export default function ItemCart ({ name, price, description, showSeparator, amount: quantaty }){

  const [amount, setAmount] = useState(quantaty)
  const [total, setTotal] = useState(price)

  const updateAmount = (newAmount) => {
    setAmount(newAmount)
    updateTotal(newAmount)
  }

  const updateTotal = (amount) => {
    setTotal(amount * price)
  }


  return <> 
    <View
      style={styles.information}
    >
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.price}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(price)
        }
      </Text>
      <Text style={styles.description}>{ description }</Text>
    </View>

    <View style={styles.cart}>
      <View>
        <View style={styles.value}>
          <Text style={styles.description}>Quantidade: </Text>
          <Field value={amount} action={updateAmount} customStyles={styles.amount} />
        </View>
        <View style={styles.value}>
          <Text style={styles.description}>Total: </Text>
          <Text style={styles.price}>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(total)
            }
          </Text>
        </View>
      </View>
      <Button value="Remover do Carrinho"></Button>
    </View>
    { showSeparator && <View style={styles.divisor} /> }
</>
}