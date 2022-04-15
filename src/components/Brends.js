import React from 'react';
import SwiperCore, {  Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import '../style/brend.css';


SwiperCore.use([Navigation]);

const slide_img = [
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/damato.jpg?itok=ye6zEy25",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/Consul.jpg?itok=W9PyC8Wq",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/christian-lakroix.jpg?itok=VxUrKzB1",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/chaumont.png?itok=jeeu0FeU",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/ccdk.jpg?itok=9BE6kiEw",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/carducci-logo.jpg?itok=VxqhBY5H",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/benissimo.jpg?itok=RZm3_1Vt",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/azzaro-logo.jpg?itok=UiYRkVJJ",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/anima.jpg?itok=jvp-x8U6",
    "https://www.cvikeri.com/sites/default/files/styles/manufacturer_logo/public/brendovi/ATVICRI.jpg?itok=ThsFCAuY",
    "https://optikalm.mk/image/cache/catalog/proizvoditeli/dolce_gabbana-150x150.png",
    "https://optikalm.mk/image/cache/catalog/proizvoditeli/emporio_armani-150x150.png",
    "https://optikalm.mk/image/cache/catalog/proizvoditeli/ralph_lauren-150x150.png"
  ];

function Brends () {
    return (
        <div className='brends'>
            <div className='container'>
               
                <div className='brands_box' >
                <Swiper
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i} className='slide'>
                <div className='slide-img'>
              <img src={img} alt="" className='slide-photo'/>
              </div>
            </SwiperSlide>
          );
      })}
     
    </Swiper>
                </div>
            </div>

        </div>
    )
}
export default Brends