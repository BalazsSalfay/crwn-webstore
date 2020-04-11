import React from 'react';
import MenuItem from '../menu-item/menu-item,component';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect';
import { DirectoyMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
    <DirectoyMenuContainer >
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoyMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
