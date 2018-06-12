import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header = () => (
  <Container>
    <ul>
      <li><Link to="#">Camisetas</Link></li>
      <li><Link to="#">Camisas</Link></li>
      <li><Link to="#">Bonés</Link></li>
      <li><Link to="#">Blusas</Link></li>
      <li><Link to="#">Calçados</Link></li>
    </ul>
  </Container>
);

export default Header;
