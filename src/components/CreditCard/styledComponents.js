// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CreditCardMainContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #344e7a;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`

export const Underline = styled.hr`
  border-color: yellow;
  width: 100px;
  text-align: center;
  border: 2px solid yellow;
`

export const CreditCardContainer = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 70vh;
  }
`

export const CreditCardCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  max-width: 340px;
  height: 200px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
    max-width: 420px;
  }
`

export const CreditCardNumber = styled.p`
  height: 55px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 26px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    height: 70px;
    font-size: 38px;
  }
`

export const CardHolderNameLabel = styled.p`
  color: #c3cad9;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const CardHolderName = styled.p`
  color: white;
  font-size: 17px;
  font-weight: 500;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const PaymentMethodMainContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`

export const PaymentMethodContainer = styled.div`
  width: 100%;
  max-width: 320px;
`

export const PaymentMethodHeading = styled.h1`
  color: #344e7a;
  text-align: center;
  font-size: 22px;
`

export const PinInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border: solid 2px #c3cad9;
  border-radius: 6px;
  outline: none;
  color: #344e7a;
  font-weight: 400;
`

export const NameInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border: solid 2px #c3cad9;
  border-radius: 6px;
  outline: none;
  color: #344e7a;
  font-weight: 400;
`
