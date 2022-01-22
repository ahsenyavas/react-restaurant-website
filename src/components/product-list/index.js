import Styles from "./index.module.scss";
import Card from "../card";
import Typography from "@mui/material/Typography";

export default function ProductList({products}) {
  return (
    <div className={Styles.container}>
      <Typography variant="h4" className={Styles.title}>THE BEST PIZZA</Typography>
      <Typography variant="body" className={Styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
      <div className={Styles.wrapper}>
        {/* {products.map((product)=>{
          <Card key={product.id} product={product}/>
          console.log(product.name);
        })} */}
          <Card />
          
      </div>
    </div>
  );
}
