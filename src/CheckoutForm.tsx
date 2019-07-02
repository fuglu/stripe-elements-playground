import axios from "axios";
import React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

interface Props extends ReactStripeElements.InjectedStripeProps {}

const CheckoutForm: React.FC<Props> = ({ stripe }) => {
  const onSubmit = async () => {
    if (!stripe) {
      return;
    }
    let { token } = await stripe.createToken({ name: "Raul Bunny" });

    if (!token) {
      return;
    }

    console.log(token);

    const { data } = await axios.post("http://localhost:3000/pay", {
      tokenId: token.id
    });

    if (data) console.log("Purchase Complete!");
  };
  return (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={onSubmit}>Send</button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
