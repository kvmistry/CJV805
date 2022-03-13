import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Hotel1 from "../assets/img/Photo1.jpeg"
import Hotel2 from "../assets/img/Photo2.jpeg"
import Hotel3 from "../assets/img/Photo3.jpeg"

const Hero = () => {
    return (
        <div className='hero'>
        <Swiper navigation={true} modules={[Navigation]} className="myswiper" autoHeight={true} allowSlideNext={true} autoplay={true}>
        <SwiperSlide><img src={Hotel1} alt="Hotel 1" height={500} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={Hotel2} alt="Hotel 2" height={500} width={2000}/></SwiperSlide>
        <SwiperSlide><img src={Hotel3} alt="Hotel 3" height={500} width={2000}/></SwiperSlide>
      </Swiper>
        </div>
    )
}

export default Hero;