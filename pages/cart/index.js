import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Styles from "./index.module.scss";

export default function Cart() {
  return (
    <div className={Styles.container}>
      <Paper elevation={3} className={Styles.paper}>
        <div className={Styles.column}>
          <h4>Product</h4>
          <p>image</p>
        </div>
        <div className={Styles.column}>
          <h4>Name</h4>
          <p>name</p>
        </div>
        <div className={Styles.column}>
          <h4>Extras</h4>
          <p>image</p>
        </div>
        <div className={Styles.column}>
          <h4>Price</h4>
          <p>$20</p>
        </div>
        <div className={Styles.column}>
          <h4>Quantity</h4>
          <p>3</p>
        </div>

        <Paper elevation={1} className={Styles.total}>
          <h4>CART TOTAL</h4>
          <p>Total: $60</p>
          <p>Your content here.</p>

          <Button variant="contained"  style={{backgroundColor: "#ec9f05" }}>
            ORDER
          </Button>
        </Paper>
      </Paper>
    </div>
  );
}
