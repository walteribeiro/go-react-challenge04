import React from 'react';
import { Container, Title } from './styles';
import Header from '../../components/Header';
import ShoppingList from '../../components/ShoppingList';

const Main = () => (
  <Container className="content">
    <div>
      <Title>GoCommerce</Title>
      <p>Meu carrinho (3)</p>
    </div>
    <Header />
    <ShoppingList />
  </Container>
);

export default Main;
