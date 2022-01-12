import { useState, useEffect } from "react";
import Styles from "./index.module.scss";
import CardUI from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Card() {

  // const [pizzaData, setPizzaData] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://private-anon-bba396c7a0-pizzaapp.apiary-mock.com/restaurants/"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPizzaData(data));
  // }, []);

  return (
    <div className={Styles.container}>
      <CardUI>
        <CardMedia
          component="img"
          alt="pizza"
          height="300"
          image="/image/pizza1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {/* {pizzaData[0].name} */}
            PIZZA FIORI
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold" }}
            color="text.secondary"
          >
            $19.00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ADD</Button>
        </CardActions>
      </CardUI>
    </div>
  );
}
