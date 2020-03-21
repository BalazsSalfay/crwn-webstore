import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XCMQ8oP78iqOgQBvkvXFZVYN00oB3Jlmyf';

  const onToken = token => {
    alert('Payment Successful!');
  }

  return (
    <StripeCheckout
      currency='EUR'
      label='Pay Now'
      name='Balazs Salfay Photography'
      billingAddress
      shippingAddress
      image='https://drive.google.com/uc?export=download&id=1SwHgM87LF5QrZ9KJuy5mGhrZtinfxmnq'
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;