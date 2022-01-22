import Styles from "./index.module.scss";
import Image from "next/image";
import CallIcon from "@material-ui/icons/Call";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NextLink from "next/link";
import { useContext } from "react";
import { PizzaContext } from "../../../pages/_app";


export default function Navbar() {
  const context = useContext(PizzaContext);

 
  
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.icon}>
          <CallIcon />
        </div>
        <div className={Styles.texts}>
          <Typography variant="h6" className={Styles.text}>
            ORDER
          </Typography>
          <Typography variant="h6" className={Styles.text}>
            213 564 789
          </Typography>
        </div>
      </div>
      <div className={Styles.center}>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>
            <NextLink href="/" passHref>
              <Link variant="inherit" underline="hover" sx={{ color: "white" }}>
                Home
              </Link>
            </NextLink>
          </li>
          <li className={Styles.listItem}>
            <NextLink href="/" passHref>
              <Link variant="inherit" underline="hover" sx={{ color: "white" }}>
                Products
              </Link>
            </NextLink>
          </li>
          <Image
            src="/image/pizza-logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <li className={Styles.listItem}>
            <NextLink href="/" passHref>
              <Link variant="inherit" underline="hover" sx={{ color: "white" }}>
                Blog
              </Link>
            </NextLink>
          </li>
          <li className={Styles.listItem}>
            <NextLink href="/" passHref>
              <Link variant="inherit" underline="hover" sx={{ color: "white" }}>
                Contact
              </Link>
            </NextLink>
          </li>
        </ul>
      </div>
      <div className={Styles.item}>
      {/* href={`/product/${pizzaDatas.id}`} */}
      <NextLink href={"/cart"} passHref>
        <IconButton>
          <Badge badgeContent={2} color="secondary" className={Styles.badge}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </NextLink>
      </div>
    </div>
  );
}
