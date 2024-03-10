import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from 'swiper';
import { Swiper, useSwiper } from 'swiper/react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { footerImg } from "./msg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';
const CurrentPlanets = (props) => {
  const { slideStyle, imgStyle, showBtn, views } = props.slide;
  const [imgs] = useState(() => footerImg());
  let swiper = useSwiper();
  const SwiperButtons = () => {
    const paras = {
      width: "5%",
      bottom: "0%",
      zIndex: "1"
    }
    let swiper = useSwiper();
    console.log(swiper, '我是')
    return ([
      <Button variant="outline-none position-absolute  " style={{ ...paras, right: "5%" }} onClick={() => swiper.slideNext()} >
        <BsFillArrowRightCircleFill className="fs-1" />
      </Button>,
      <Button variant="outline-none position-absolute  " style={{ ...paras, left: "5%" }} onClick={() => swiper.slidePrev()}>
        <BsFillArrowLeftCircleFill className="fs-1" />
      </Button>
    ])
  };

  return (
    <>
      <Swiper modules={[Keyboard, Navigation]}
        className="mySwiper w-50  position-absolute z-2 start-50  bouncedUp  "
        style={{ transform: "translate(-50%)" }}
        slidesPerView={views}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        loopedSlides={2}
      >
        {
          imgs.map((e) =>
            <SwiperSlide className="text-center " key={e.id} >
              <div className="floating" style={slideStyle}>
                <LazyLoadImage src={e.img} className="opacity-50 floating  " effect="blur" style={imgStyle}
                />
              </div>
            </SwiperSlide>
          )
        }
        <SwiperButtons />


      </Swiper>

    </>
  )
}

export default CurrentPlanets