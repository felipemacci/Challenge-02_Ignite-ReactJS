import { QuantityCounterContainer } from "./styles";
import { Minus, Plus } from 'phosphor-react'
import { useState } from "react";

export function QuantityCounter() {
  const [quantity, setQuantity] = useState(0)

  const decreaseAmount = () => {
    if (quantity > 0) {
      setQuantity(state => (state - 1))
    }
  }

  const increaseAmount = () => {
    if (quantity < 50) {
      setQuantity(state => (state + 1))
    }
  }

  return (
    <QuantityCounterContainer>
      <button onClick={ decreaseAmount }>
        <Minus size={ 14 } />
      </button>

      <span>{ quantity }</span>

      <button onClick={ increaseAmount }>
        <Plus size={ 14 } />
      </button>
    </QuantityCounterContainer>
  )
}