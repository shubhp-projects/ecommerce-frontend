import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51NHni4SFPC9pcWnuDaUtaFQ2I7ZoKMGDXkMJ8EbN9aastI40N91hUUAwdKZ22ToTJ2a4IvNGH5D4rHOA6KUH4F5q00oVI9eSRg';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ABC Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/wWt.svg"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeCheckoutButton;
