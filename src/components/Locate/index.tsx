import { MapPin } from "phosphor-react";
import { LocateContainer } from "./styles";

export function Locate() {
  return (
    <LocateContainer>
      <MapPin size={ 22 } weight="fill" />
      <span>Nova Odessa, SP</span>
    </LocateContainer>
  )
}