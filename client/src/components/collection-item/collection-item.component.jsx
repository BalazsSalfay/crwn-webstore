import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionImageContainer,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
  AddToCartButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} inverted >Add to cart</AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);