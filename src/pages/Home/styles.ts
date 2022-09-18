import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  #intro {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 5.5rem 0;
  }

  .intro__presentation {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      margin-top: 1rem;
      line-height: 1.3;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  .intro__image {
    height: 22.5rem;
    text-align: right;
  }

  #products {
    padding-top: 1.875rem;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
    }
  }
`

export const PresentationItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;
`

export const PresentationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 50%;
  margin-top: 1.25rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.background};
    border-radius: 50%;
  }

  &:nth-of-type(1) .icon { background: ${(props) => props.theme["yellow-dark"]} }
  &:nth-of-type(2) .icon { background: ${(props) => props.theme["base-text"]} }
  &:nth-of-type(3) .icon { background: ${(props) => props.theme.yellow} }
  &:nth-of-type(4) .icon { background: ${(props) => props.theme.purple} }

  .text {
    color: ${(props) => props.theme["base-text"]};
  }
`