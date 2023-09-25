import green from '../assets/produtores/green.png'
import salad from '../assets/produtores/salad.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import grow from '../assets/produtores/grow.png'
import potager from '../assets/produtores/potager.png'

const makeRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const producers = {
    title: "Produtores",
    list: [
        {
            name: 'Green',
            image: green,
            distance: makeRandomNumber(1,500),
            stars: makeRandomNumber(1,5)
        },
        {
            name: 'Salad',
            image: salad,
            distance: makeRandomNumber(1,500),
            stars: makeRandomNumber(1,5)
        },
        {
            name: 'Jenny Jack Farm',
            image: jennyJack,
            distance: makeRandomNumber(1,500),
            stars: makeRandomNumber(1,5)
        },
        {
            name: 'Grow',
            image: grow,
            distance: makeRandomNumber(1,500),
            stars: makeRandomNumber(1,5)
        },
        {
            name: 'Potager',
            image: potager,
            distance: makeRandomNumber(1,500),
            stars: makeRandomNumber(1,5)
        }
    ]
}

export default producers