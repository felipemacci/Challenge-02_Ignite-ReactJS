import { NavLink } from "react-router-dom";
import { CartContainer, ItemsCounter } from "./styles";
import { ShoppingCart} from 'phosphor-react'

export function Cart() {
  return (
    <CartContainer>
      <NavLink to="/cart">
        <ShoppingCart size={ 22 } weight="fill" />
        <ItemsCounter>3</ItemsCounter>
      </NavLink>
    </CartContainer>
  )
}