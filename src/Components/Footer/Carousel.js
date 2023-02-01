import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Corousel.scss";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const Carousel = () => {
  
  return (
    <Swiper pagination={{
      dynamicBullets: true,
    }} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="item">
          <h3 className="item1">1</h3>
          <div className="circle"></div>
          <p>One facilisi. Integer posuere nibh vel sagittis lacinia</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <h3 className="item2">2</h3>
          <div className="circle"></div>
          <p>Two facilisi. Integer posuere nibh vel sagittis lacinia</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <h3 className="item3">3</h3>
          <div className="circle"></div>
          <p>Three facilisi. Integer posuere nibh vel sagittis lacinia</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
