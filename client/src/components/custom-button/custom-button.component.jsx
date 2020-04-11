import React from 'react';

import { CustomButtomContainer } from './custom-button.stlyes';

const CustomButton = ({ children, ...props }) => (
  <CustomButtomContainer  {...props} >
    {children}
  </CustomButtomContainer>
);

export default CustomButton;