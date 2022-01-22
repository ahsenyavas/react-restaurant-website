import { useState, useEffect, useContext } from "react";
import Styles from "./index.module.scss";
import CardUI from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { PizzaContext } from "../../../pages/_app";

export default function Card() {
  // const [pizzaData, setPizzaData] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://private-anon-bba396c7a0-pizzaapp.apiary-mock.com/restaurants/"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPizzaData(data));
  // }, []);

  const context = useContext(PizzaContext);
  console.log(context);
  return (
    <>
      {context.state.pizzaList.map(pizza => {
        return(
          
        <div className={Styles.container}>
          <CardUI className={Styles.card} key={pizza.id}>
            <CardMedia
              component="img"
              alt={pizza.name}
              height="300"
              image={pizza.img}
            />
      
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {/* {pizzapizza[0].name} */}
                {pizza.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold" }}
                color="text.secondary"
              >
                {pizza.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pizza.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => context.addToCart(pizza)}>ADD</Button>
            </CardActions>
          </CardUI>
          
        </div>
        )
      })}
    </>
  );
}
