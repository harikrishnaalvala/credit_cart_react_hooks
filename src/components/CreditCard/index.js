// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardMainContainer,
  Heading,
  Underline,
  CreditCardContainer,
  CreditCardCard,
  CreditCardNumber,
  CardHolderNameLabel,
  CardHolderName,
  PaymentMethodMainContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  PinInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [userPin, setUserPin] = useState('')
  const [userName, setUserName] = useState('')

  const onChangeCardNumber = event => {
    setUserPin(event.target.value)
  }

  const onChangeCardholderName = event => {
    setUserName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardMainContainer>
        <Heading>CREDIT CARD</Heading>
        <Underline />
        <CreditCardContainer>
          <CreditCardCard data-testid="creditCard">
            <CreditCardNumber>{userPin}</CreditCardNumber>
            <CardHolderNameLabel>CARDHOLDER NAME</CardHolderNameLabel>
            <CardHolderName>{userName}</CardHolderName>
          </CreditCardCard>
        </CreditCardContainer>
      </CreditCardMainContainer>

      <PaymentMethodMainContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <PinInput
            placeholder="Card Number"
            onChange={onChangeCardNumber}
            type="text"
          />
          <NameInput
            placeholder="Cardholder Name"
            onChange={onChangeCardholderName}
            type="text"
          />
        </PaymentMethodContainer>
      </PaymentMethodMainContainer>
    </MainContainer>
  )
}

export default CreditCard
