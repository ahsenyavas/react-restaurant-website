import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { PizzaContext } from "../_app";
import Styles from "./index.module.scss";

export default function Cart() {
  const context = useContext(PizzaContext);
  return (
    <>
      {context.state.cart.map((pizza) => {
        return (
          <div className={Styles.container}>
            <Paper elevation={3} className={Styles.paper}>
              <div className={Styles.column}>
                <h4>Product</h4>

                <img src="/image/pizza1.png" alt="" width={80} height={80} />
              </div>
              <div className={Styles.column}>
                <h4>Name</h4>
                <p>{pizza.name}</p>
              </div>
              <div className={Styles.column}>
                <h4>Extras</h4>
                <p>Spicy Sauce</p>
              </div>
              <div className={Styles.column}>
                <h4>Price</h4>
                <p>$ {pizza.price}</p>
              </div>
              <div className={Styles.column}>
                <h4>Quantity</h4>
                <p>{pizza.count}</p>
              </div>

              <Paper elevation={1} className={Styles.total}>
                <h4>CART TOTAL</h4>
                <p>Total: ${pizza.price * pizza.count}</p>
                <p>CHECKOUT NOW!</p>

                <Button
                  variant="contained"
                  style={{ backgroundColor: "#ec9f05" }}
                >
                  ORDER
                </Button>
              </Paper>
            </Paper>
          </div>
        );
      })}
    </>
  );
}
