import { Text, View} from "react-native";

import styles from '../../styles/itemStyle'
import Field from "./Field"
import Button from './Button'
import { useState } from "react";

export default function Item ({ name, price, description }){

  const [amount, setAmount] = useState(1)


  return <> 
    <View style={styles.information}>
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.price}>{ price }</Text>
      <Text style={styles.description}>{ description }</Text>
    </View>

    <View style={styles.cart}>
      <View>
        <View style={styles.value}>
          <Text style={styles.description}>Quantidade: </Text>
          <Field value={amount} action={setAmount} customStyles={styles.amount} />
        </View>
        <View style={styles.value}>
          <Text style={styles.description}>Preço: </Text>
          <Text style={styles.price}>0</Text>
        </View>
      </View>
      <Button value="Adicionar"></Button>
    </View>
    <View style={styles.divisor} />
</>
}