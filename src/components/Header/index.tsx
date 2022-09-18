import { Actions, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Locate } from "../Locate";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer className="container">
      <img src={ logo } alt="Ignite Coffee Delivery Logo. A rocket in a coffee cup" />

      <Actions>
        <Locate />
        <Cart />
      </Actions>
    </HeaderContainer>
  )
}