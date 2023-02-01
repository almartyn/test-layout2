import React from 'react'
import Button from "../UI/Button";
import "./Footer.scss";
import Carousel from "./Carousel";
import { useMediaQuery } from 'react-responsive';
import FooterItemComponent from "./FooterItemComponent";

const Footer = () => {

  const isMobile =  useMediaQuery({
    query: '(max-width: 768px)'
  })
  
  // window.innerWidth<768;
  return (
    <div className="footer-wraper">
      <h2>Maecenas elementum elementum dui</h2>
     {isMobile ? <Carousel/>: <FooterItemComponent/>}
      <div className="button-wraper">
        <Button>Sed nec venenatis odio, ut suscipit nisl</Button>
      </div>
    </div>
  );
};

export default Footer;
