import Styles from "./index.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <img
          src="https://images.unsplash.com/photo-1563245738-9169ff58eccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="restaurant"
        />
      </div>
      <div className={Styles.item}>
        <div className={Styles.card}>
          <Typography variant="h5" className={Styles.best}>The Best Pizzas!</Typography>
          <Typography variant="h6" className={Styles.title}>Oven-fired Goodness</Typography>
        </div>
        <div className={Styles.card}>
          <Typography variant="h5" className={Styles.head}>RESTAURANTS</Typography>
          <p>
            654 don road
            <br /> newyork, 465
            <br />
            4564 546 54
          </p>
          <p>
            654 don road
            <br /> newyork, 465
            <br />
            4564 546 54
          </p>
          <p>
            654 don road
            <br /> newyork, 465
            <br />
            4564 546 54
          </p>
          <p>
            654 don road
            <br /> newyork, 465
            <br />
            4564 546 54
          </p>
        </div>

        <div className={Styles.card}>
          <Typography variant="h5" className={Styles.head}>WORKING HOURS</Typography>
          <p className={Styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={Styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
      
    </div>
  );
}
