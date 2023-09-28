import { Text, TouchableOpacity, View} from "react-native";

import styles from '../../styles/itemStyle'
import Field from "./Field"
import Button from './Button'
import { useState } from "react";

export default function Item ({ name, price, description }){

  const [amount, setAmount] = useState(1)
  const [total, setTotal] = useState(price)
  const [expand, setExpand] = useState(false)

  const updateAmount = (newAmount) => {
    setAmount(newAmount)
    updateTotal(newAmount)
  }

  const updateTotal = (amount) => {
    setTotal(amount * price)
  }

  const toggleExpand = () => {
    setExpand(!expand)
    updateTotal(1)
  }


  return <> 
    <TouchableOpacity
      onPress={toggleExpand}
      style={styles.information}
    >
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.price}>{
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(price)
        }
      </Text>
      <Text style={styles.description}>{ description }</Text>
    </TouchableOpacity>

    { expand && <View style={styles.cart}>
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
      <Button value="Adicionar ao Carrinho"></Button>
    </View>
    }
    <View style={styles.divisor} />
</>
}