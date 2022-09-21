import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AddressFormContainer, CartContainer, OrderContainer, PaymentMethodFormContainer } from "./styles";
import cafe from '../../assets/american.svg'
import { CoffeeItem } from "../../components/CoffeeItem";
import { NavLink } from "react-router-dom";

export function Cart() {
  return (
    <CartContainer className="container">
      <section id="complete-order">
        <h2>Complete your order</h2>

        <AddressFormContainer>
          <header>
            <MapPinLine size={ 22 } />
            
            <div>
              <h3>Delivery Address</h3>
              <p>Enter the address where you want to receive your order</p>
            </div>
          </header>

          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Street" />
            <input type="number" placeholder="Number" />
            <div>
              <input id="complement" type="text" placeholder="Complement" />
              <label htmlFor="complement">Optional</label>
            </div>
            <input type="text" placeholder="District" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="UF" />
          </form>
        </AddressFormContainer>

        <PaymentMethodFormContainer>
          <header>
            <CurrencyDollar size={ 22 } />
            
            <div>
              <h3>Payment</h3>
              <p>Payment is made on delivery. Choose the way you want to pay</p>
            </div>
          </header>

          <form>
            <input id="payment-method__credit" type="radio" name="payment-method" />
            <label htmlFor="payment-method__credit">
              <CreditCard size={ 16 } />
              <span>Credit Card</span>
            </label>
            <input id="payment-method__debit" type="radio" name="payment-method" />
            <label htmlFor="payment-method__debit">
              <Bank size={ 16 } />
              <span>Debit Card</span>
            </label>
            <input id="payment-method__money" type="radio" name="payment-method" />
            <label htmlFor="payment-method__money">
              <Money size={ 16 } />
              <span>Money</span>
            </label>
          </form>
        </PaymentMethodFormContainer>
      </section>

      <section id="your-cart">
        <h2>Selected Coffees</h2>

        <OrderContainer>
          <ul>
            <li>
              <CoffeeItem
                name="Leitinho"
                image={ cafe }
                price={ 0.01 }
                key={ 'nossa que bosta' }
              />
            </li>

            <li>
              <CoffeeItem
                name="Leitinho"
                image={ cafe }
                price={ 0.01 }
                key={ 'nossa que bosta' }
              />
            </li>
          </ul>

          <table>
            <tbody>
              <tr>
                <td>Total items</td>
                <td>$ 29,70</td>
              </tr>

              <tr>
                <td>Delivery</td>
                <td>$ 3,50</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>$ 33,20</td>
              </tr>
            </tbody>
          </table>

          <NavLink to="/success">Confirm order</NavLink>
        </OrderContainer>
      </section>
    </CartContainer>
  )
}