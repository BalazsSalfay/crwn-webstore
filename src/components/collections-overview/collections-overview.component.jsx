import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionOverViewContainer } from './collection-overview.styles';

const CollectionsOverView = ({ collections }) => (
  <CollectionOverViewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
    }
  </CollectionOverViewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverView);
