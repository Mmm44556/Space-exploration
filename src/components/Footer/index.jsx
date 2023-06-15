import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Controller } from 'swiper';
import { Swiper, useSwiper } from 'swiper/react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { footerImg } from "./msg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Footer() {

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [imgs] = useState(() => footerImg());
  let swiper = useSwiper();
  const SwiperButtons = () => {
    const paras = {
      width: "5%",
      bottom: "0%",
      zIndex: "1"
    }
    let swiper = useSwiper();
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
    < >

      <Swiper modules={[Keyboard, Navigation, Controller]}
        className="mySwiper w-50  position-absolute  start-50 bouncedUp "
        style={{ transform: "translate(-50%)", zIndex: "2" }}
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        loopedSlides={2}



        controller={{ control: controlledSwiper }}
      >
        {
          imgs.map((e) =>
            <SwiperSlide className="text-center " key={e.id} >
              <div className="floating" style={{ height: '200px' }}>
                <LazyLoadImage src={e.img} className="opacity-50 floating  " effect="blur" style={{ width: '30%', WebkitBoxReflect: " right -100px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3))" }}
                />
              </div>
            </SwiperSlide>
          )
        }
        <SwiperButtons />
      </Swiper>

      <Swiper
        modules={[Controller]}
        className="mySwiper  w-100 position-absolute  bg start-50"
        style={{ transform: "translate(-50%)", height: "40%", zIndex: "1", bottom: "0%" }}
        slidesPerView={3}
        enabled={false}
        loop={true}
        loopedSlides={2}
        onSwiper={setControlledSwiper}
      >
        {
          imgs.map((e) =>
            <SwiperSlide className="text-center  " key={e.id} >
             
                <LazyLoadImage src={e.img} className="opacity-75  " effect="blur" style={{ width: '0%' }}
                />
              
            </SwiperSlide>
          )

        }
      </Swiper>



    </>



  )
}
