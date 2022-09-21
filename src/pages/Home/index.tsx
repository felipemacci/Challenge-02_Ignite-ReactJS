import { HomeContainer, ProductsContainer } from "./styles";
import coffee from '../../assets/coffee image.svg'
import { PresentationItems } from "./components/PresentationItems";
import { CoffeeCard } from "../../components/CoffeeCard";

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

const coffees = [
  {
    name: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    image: espresso,
    tags: [
      'Traditional'
    ],
    price: 9.90
  },

  {
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    image: american,
    tags: [
      'Traditional'
    ],
    price: 9.90
  },

  {
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    image: creamy,
    tags: [
      'Traditional'
    ],
    price: 9.90
  },

  {
    name: 'Iced Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    image: iced,
    tags: [
      'Traditional', 'Iced'
    ],
    price: 9.90
  },

  {
    name: 'Coffee with milk',
    description: 'Half and half traditional espresso with steamed milk',
    image: milk,
    tags: [
      'Traditional', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Latte',
    description: 'A shot of espresso with twice the milk and creamy foam',
    image: latte,
    tags: [
      'Traditional', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Cappuccino',
    description: 'Cinnamon drink made from equal doses of coffee, milk and foam',
    image: cappuccino,
    tags: [
      'Traditional', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Macchiato',
    description: 'Espresso mixed with some hot milk and foam',
    image: macchiato,
    tags: [
      'Traditional', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Mochaccino',
    description: 'Espresso coffee with chocolate syrup, little milk and foam',
    image: mocchaccino,
    tags: [
      'Traditional', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    image: hot,
    tags: [
      'Special', 'With milk'
    ],
    price: 9.90
  },

  {
    name: 'Cuban',
    description: 'Iced espresso drink with rum, cream and mint',
    image: cuban,
    tags: [
      'Special', 'Alcoholic', 'Iced'
    ],
    price: 9.90
  },

  {
    name: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    image: hawaiian,
    tags: [
      'Special'
    ],
    price: 9.90
  },

  {
    name: 'Arabic',
    description: 'Drink prepared with Arabic coffee beans and spices',
    image: arabic,
    tags: [
      'Special'
    ],
    price: 9.90
  },

  {
    name: 'Irish',
    description: 'Drink made from coffee, Irish whiskey, sugar and whipped cream',
    image: irish,
    tags: [
      'Special', 'Alcoholic'
    ],
    price: 9.90
  },

  
]

export function Home() {
  return (
    <HomeContainer className="container">
      <section id="intro">
        <div className="intro__presentation">
          <h1>Find the perfect coffee for any time of day</h1>
          <p>With Coffee Delivery you get your coffee wherever you are, anytime</p>

          <PresentationItems />
        </div>
        <img className="intro__image" src={ coffee } alt="Cup of coffee" />
      </section>

      <section id="products">
        <h2>Our cafes</h2>

        <ProductsContainer>
          {
            coffees.map((coffee) => {
              return (
                <CoffeeCard
                  name={ coffee.name }
                  description={ coffee.description }
                  image={ coffee.image }
                  tags={ coffee.tags }
                  price={ coffee.price }
                  key={ coffee.name }
                />
              )
            })
          }
        </ProductsContainer>
      </section>
    </HomeContainer>
  )
}