import { ActionTypes } from './actions'
import espresso from '../../assets/espresso.svg'
import american from '../../assets/american.svg'
import creamy from '../../assets/creamy espresso.svg'
import iced from '../../assets/iced.svg'
import milk from '../../assets/with milk.svg'
import latte from '../../assets/latte.svg'
import cappuccino from '../../assets/cappuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocchaccino from '../../assets/mochaccino.svg'
import hot from '../../assets/hot.svg'
import cuban from '../../assets/cuban.svg'
import hawaiian from '../../assets/hawaiian.svg'
import arabic from '../../assets/arabic.svg'
import irish from '../../assets/irish.svg'

export interface Coffee {
  name: string
  description: string
  image: string
  tags: string[]
  price: number
  amount: number
}

export const coffeeList = [
  {
    name: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    image: espresso,
    tags: ['Traditional'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    image: american,
    tags: ['Traditional'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    image: creamy,
    tags: ['Traditional'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Iced Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    image: iced,
    tags: ['Traditional', 'Iced'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Coffee with milk',
    description: 'Half and half traditional espresso with steamed milk',
    image: milk,
    tags: ['Traditional', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Latte',
    description: 'A shot of espresso with twice the milk and creamy foam',
    image: latte,
    tags: ['Traditional', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Cappuccino',
    description:
      'Cinnamon drink made from equal doses of coffee, milk and foam',
    image: cappuccino,
    tags: ['Traditional', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Macchiato',
    description: 'Espresso mixed with some hot milk and foam',
    image: macchiato,
    tags: ['Traditional', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Mochaccino',
    description: 'Espresso coffee with chocolate syrup, little milk and foam',
    image: mocchaccino,
    tags: ['Traditional', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    image: hot,
    tags: ['Special', 'With milk'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Cuban',
    description: 'Iced espresso drink with rum, cream and mint',
    image: cuban,
    tags: ['Special', 'Alcoholic', 'Iced'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    image: hawaiian,
    tags: ['Special'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Arabic',
    description: 'Drink prepared with Arabic coffee beans and spices',
    image: arabic,
    tags: ['Special'],
    price: 9.9,
    amount: 1,
  },

  {
    name: 'Irish',
    description:
      'Drink made from coffee, Irish whiskey, sugar and whipped cream',
    image: irish,
    tags: ['Special', 'Alcoholic'],
    price: 9.9,
    amount: 1,
  },
]

export function CartReducer(state: Coffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      if (state.some((coffee) => coffee.name === action.payload.name)) {
        const newCoffeeList: Coffee[] = state.map((coffee) => {
          if (coffee.name === action.payload.name && coffee.amount < 50) {
            coffee.amount += 1
          }

          return coffee
        })

        return newCoffeeList
      } else {
        return [
          ...state,
          coffeeList[
            coffeeList.findIndex(
              (coffee) => coffee.name === action.payload.name,
            )
          ],
        ]
      }
    case ActionTypes.REMOVE_ITEM:
      if (state.some((coffee) => coffee.name === action.payload.name)) {
        if (
          state[
            state.findIndex((coffee) => coffee.name === action.payload.name)
          ].amount > 1
        ) {
          const newCoffeeList: Coffee[] = state.map((coffee) => {
            if (coffee.name === action.payload.name) {
              coffee.amount -= 1
            }

            return coffee
          })

          return newCoffeeList
        } else {
          const newCoffeeList = state.filter(
            (coffee) => coffee.name !== action.payload.name,
          )

          return newCoffeeList
        }
      }
      break
    default:
      return state
  }
}
