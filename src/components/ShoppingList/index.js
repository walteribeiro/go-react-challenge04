import React from 'react';
import { Container, List, Item } from './styles';

const ShoppingList = () => (
  <Container>
    <List>
      <Item>
        <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" alt="Shirt" />
        <strong>Camiseta Trok</strong>
        <span>Element</span>
        <p>R$ 50,00</p>
      </Item>
    </List>
  </Container>
);

export default ShoppingList;
