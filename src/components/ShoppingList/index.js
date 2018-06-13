import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from '../../store/ducks/product';

import { Container, List, Item } from './styles';

export class ShoppingList extends Component {
  static propTypes = {
    product: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      })),
    }).isRequired,
    getProductsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProductsRequest();
  }

  render() {
    return (
      <Container>
        <List>
          {this.props.product.data.map(item => (
            <Item key={item.id}>
              <img src={item.image} alt={item.name} />
              <strong>{item.name}</strong>
              <span>{item.brand}</span>
              <p>R$ {item.price}</p>
            </Item>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingList);
