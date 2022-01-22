import Head from "next/head";
import ProductList from "../src/components/product-list";
import Slider from "../src/components/slider";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="restaurant" />
        <link rel="icon" href="/image/pizza-logo.png" />
      </Head>
     
      <Slider />
     <ProductList />
    </div>
  );
}
