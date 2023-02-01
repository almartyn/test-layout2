import Button from "../UI/Button";
import "./Footer.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Footer = () => {
  return (
    <div className="footer-wraper">
      <h2>Maecenas elementum elementum dui</h2>
      <Swiper pagination={true} modules={[Pagination]} className="footer-container-items">
        <div className="footer-container-items">
          <SwiperSlide className="item">
            <div className="item">
              <h3 className="item1">1</h3>
              <div className="circle"></div>
              <div className="dashed left"></div>
              <p>One facilisi. Integer posuere nibh vel sagittis lacinia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="item">
            <div className="item">
              <h3 className="item2">2</h3>
              <div className="circle"></div>
              <p>Two facilisi. Integer posuere nibh vel sagittis lacinia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="item">
            <div className="item">
              <h3 className="item3">3</h3>
              <div className="circle"></div>
              <div className="dashed right"></div>
              <p>Three facilisi. Integer posuere nibh vel sagittis lacinia</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="button-wraper">
        <Button>Sed nec venenatis odio, ut suscipit nisl</Button>
      </div>
    </div>
  );
};

export default Footer;
