import Styles from "./index.module.scss";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Slider() {
  const sliderData = [
    {
      image: "/image/pizza1.png",
    },
    {
      image: "/image/pizza-logo.png",
    },
    {
      image: "/image/pizza1.png",
    },
  ];

  const cx = classNames.bind(Styles);
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  function handleArrow(direction){
    if(direction ==="left"){
      setCurrent(current === 0 ? length -1 : current-1);
    
    }
    if(direction ==="right"){
      setCurrent(current === length-1 ? 0 : current+1);
     
      }
  }
  console.log(current); 
  if(sliderData.length <= 0){
    return null;
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.arrow} style={{ left: 0 }} onClick={()=>handleArrow("left")}>
        <ArrowBackIosIcon sx={{ fontSize: "5rem" }} />
      </div>
      <div className={Styles.wrapper}>
       
        {sliderData.map((slide, index) => {
          return (
            <div className={Styles.imageContainer}  key={index}>
             
               <div className={cx({slideActive: index === current, slide: index !== current} )}>
               <div className={Styles.texts}>
               <p>PIZZA</p>
               <p>ORDER NOW</p>
               <p>2132 23 12</p>
               </div>
                {index === current && <Image src={slide.image} alt="pizza" layout="fill" objectFit="contain" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.arrow} style={{ right: 0 }} onClick={()=>handleArrow("right")}>
        <ArrowForwardIosIcon sx={{ fontSize: "5rem" }} />
      </div>
    </div>
  );
}
