import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { pizzaDatas } from "../utils/pizzaDatas";
import { createContext, useState } from "react";

export const PizzaContext = createContext();

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    pizzaList: pizzaDatas,
    cart: [],
  });

  const addToCart = (pizza) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === pizza.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === pizza.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...pizza, count: 1 }],
    });

  return (
    <Layout>
      <PizzaContext.Provider value={{ state: state, addToCart }}>
        <Component {...pageProps} />
      </PizzaContext.Provider>
    </Layout>
  );
}

export default MyApp;
