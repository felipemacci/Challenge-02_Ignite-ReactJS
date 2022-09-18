import { HomeContainer, PresentationItem, PresentationItems } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee image.svg'

export function Home() {
  return (
    <HomeContainer className="container">
      <section id="intro">
        <div className="intro__presentation">
          <h1>Find the perfect coffee for any time of day</h1>
          <p>With Coffee Delivery you get your coffee wherever you are, anytime</p>

          <PresentationItems>
            <PresentationItem>
              <div className="icon">
                <ShoppingCart size={ 16 } weight="fill" />
              </div>

              <span className="text">Simple and secure purchase</span>
            </PresentationItem>

            <PresentationItem>
              <div className="icon">
                <Package size={ 16 } weight="fill" />
              </div>
              
              <span className="text">Packaging keeps the coffee intact</span>
            </PresentationItem>

            <PresentationItem>
              <div className="icon">
                <Timer size={ 16 } weight="fill" />
              </div>
              
              <span className="text">Fast and tracked delivery</span>
            </PresentationItem>

            <PresentationItem>
              <div className="icon">
                <Coffee size={ 16 } weight="fill" />
              </div>
              
              <span className="text">Coffee arrives fresh to you</span>
            </PresentationItem>
          </PresentationItems>
        </div>
        <img className="intro__image" src={ coffee } alt="Cup of coffee" />
      </section>

      <section id="products">
        <h2>Our cafes</h2>

        
      </section>
    </HomeContainer>
  )
}