import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartDropdownItemContainer, EmptyMessageContainer } from './cart-dropdown.styles';
import { CustomButtomContainer } from '../custom-button/custom-button.stlyes';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartDropdownItemContainer>
      {cartItems.length ? (
        cartItems.map(cartitem => (
          <CartItem key={cartitem.id} item={cartitem} />
        ))
      ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )
      }
    </CartDropdownItemContainer>
    <CustomButtomContainer onClick={() => {
      history.push('/checkout');
      dispatch(toogleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButtomContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
