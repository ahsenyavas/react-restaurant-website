import { pizzaDatas } from "../../utils/pizzaDatas";
import Styles from "./index.module.scss";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import NextLink from "next/link";

export default function Product() {
 
  return (
    <div className={Styles.container}>
      <Paper elevation={3} className={Styles.paper}>
        <div className={Styles.left}>
          <div className={Styles.image}>
            <img src={pizzaDatas[0].img} />
          </div>
        </div>
        <div className={Styles.right}>
          <h1>{pizzaDatas.name}</h1>
          <span className={Styles.price}>${pizzaDatas[0].price}</span>
          <p className={Styles.desc}>{pizzaDatas[0].desc}</p>
          <p className={Styles.ing}>Choose Ingredients:</p>
          <FormGroup className={Styles.checkbox}>
            <FormControlLabel
              control={<Checkbox sx={{ color: "#ff4e00" }} />}
              label="Extra Cheese"
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: "#ff4e00" }} />}
              label="Spicy Sauce"
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: "#ff4e00" }} />}
              label="Garlic Sauce"
            />
          </FormGroup>
          <div className={Styles.add}>
            <TextField
              type="number"
              defaultValue={1}
              size="small"
              sx={{ width: "4rem" }}
            ></TextField>
            <NextLink href="/cart">
              <Button
                variant="contained"
                style={{ backgroundColor: "#ec9f05" }}
              >
                Add to Cart
              </Button>
            </NextLink>
          </div>
        </div>
      </Paper>
    </div>
  );
}
