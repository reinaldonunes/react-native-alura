import imgFarm from "../../assets/logo.png";

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
  headApp: {
    headName: "Detalhe da Cesta"
  },
  details: {
    nameCesta: "Cesta de Verduras",
    fromFarm: "Jenny Jack Farm",
    description: "Uma cesta com produtos selecionados cuidadosamente para a sua cozinha!",
    price: "R$ 40,00",
    brand: imgFarm,
    button: "Comprar"
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        productName: "Tomate",
        productImage: tomate,
      },
      {
        productName: "Brócolis",
        productImage: brocolis,
      },
      {
        productName: "Batata",
        productImage: batata,
      },
      {
        productName: "Pepino",
        productImage: pepino,
      },
      {
        productName: "Abóbora",
        productImage: abobora,
      }
    ]
  }
}

export default cesta;