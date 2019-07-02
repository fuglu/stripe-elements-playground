import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

const App: React.FC = () => {
  const onSubmit = () => {};
  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_jPnp0aWP2XjMsCuPs2GpK3iS00lK91jCJO">
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    </div>
  );
};

export default App;
