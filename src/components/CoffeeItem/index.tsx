import { Trash } from "phosphor-react";
import { QuantityCounter } from "../QuantityCounter";
import { CoffeeItemContainer } from "./styles";

interface CoffeeItemProps {
  name: string
  image: string
  price: number
}

export function CoffeeItem({ name, image, price }: CoffeeItemProps) {
  return (
    <CoffeeItemContainer>
      <img src={ image } />

      <div className="details">
        <p>{ name }</p>

        <div className="actions">
          <QuantityCounter />

          <button>
            <Trash size={ 16 } />
            Remove
          </button>
        </div>
      </div>

      <strong className="price">$ { String(price.toFixed(2)).replace('.', ',') }</strong>
    </CoffeeItemContainer>
  )
}