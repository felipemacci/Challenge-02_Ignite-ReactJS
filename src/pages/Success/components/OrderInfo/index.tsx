import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderInfoContainer } from "./styles";

export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <div className="info">
        <div className="info__icon">
          <MapPin size={ 16 } weight="fill" />
        </div>
        <p className="info__text">Delivery to <strong>Street João Daniel Martinelli, 102</strong> <br /> Farrapos - Porto Alegre, RS</p>
      </div>

      <div className="info">
        <div className="info__icon">
          <Timer size={ 16 } weight="fill" />
        </div>
        <p className="info__text">Delivery forecast <br /> <strong>20 min - 30 min</strong></p>
      </div>

      <div className="info">
        <div className="info__icon">
          <CurrencyDollar size={ 16 } />
        </div>
        <p className="info__text">Payment on delivery <br /> <strong>Credit card</strong></p>
      </div>
    </OrderInfoContainer>
  )
}