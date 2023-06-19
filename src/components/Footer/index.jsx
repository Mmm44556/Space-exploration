import { useState, useEffect, useCallback } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Controller, EffectFade } from 'swiper';
import { Swiper, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import PubSub from "pubsub-js";

import { footerImg } from "./msg";
import { footerBg } from './bgMsg';
export default function Footer() {

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [imgs] = useState(() => footerImg());
  const [bgImgs] = useState(() => footerBg());
  let swiper = useSwiper();

    //新的banner組件掛載好在展示選擇
  useEffect(() => {
    PubSub.subscribe('done', bannerDone())
  },[])
  //發送當前星球的id讓banner資訊替換
  const bannerDone = (slide)=>{
    if((slide!==undefined)) {
      PubSub.unsubscribe(bannerDone())
      PubSub.publish('slideID', slide.id)
    }
    return(
      (msg, data) => {
        if (data.done === 'ok') {
          setIsDone(true)
        }

      }
    )
  }

  const SwiperButtons = () => {
    const paras = {
      width: "10%",
      bottom: "0%",
      zIndex: "1"
    }
    let swiper = useSwiper();
    return ([
      <Button variant="outline-none position-absolute  " key={'0'} style={{ ...paras, right: "5%" }} onClick={() => swiper.slideNext()} >
        <BsFillArrowRightCircleFill className="fs-1" />
      </Button>,
      <Button variant="outline-none position-absolute  " key={'1'} style={{ ...paras, left: "5%" }} onClick={() => swiper.slidePrev()}>
        <BsFillArrowLeftCircleFill className="fs-1" />
      </Button>
    ])
  };

  //將當前slide ID傳給Banner展示資訊
  const currentSlideId = useCallback((slide) => {
    let fn = (e, index) => {
      if (e.id === slide.id) {
        e.index = index;
        return e;
      }
    };
    const data = bgImgs.filter(fn)
    const id = Number(slide.id);
    PubSub.publish('slideID', { id, data })
  },[])

  return isDone && (
    <> <Swiper modules={[Keyboard, Navigation, Controller]}
      className="mySwiper w-50  position-absolute  start-50 bouncedUp "
      style={{ transform: "translate(-50%)", zIndex: "3" }}
      slidesPerView={3}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      loopedSlides={2}
      grabCursor={true}
      speed={1000}
      controller={{ control: controlledSwiper }}>
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
        modules={[Controller, EffectFade]}
        className="mySwiper  w-50 h-75 position-absolute  bgSwiper start-100 bottom-50 "
        style={{ transform: "translate(-80%,40%)", height: "0%", zIndex: "1" }}
        slidesPerView={1}
        enabled={false}
        loop={true}
        loopedSlides={2}
        speed={1000}
        effect={"fade"}
        onSwiper={setControlledSwiper}
        onSlideChangeTransitionEnd={(w) => bannerDone(w.slides[w.activeIndex])}>
        {
          bgImgs.map((e) =>
            <SwiperSlide className="text-center  " id={e.id} key={e.id} onClick={() => { console.log(e.id) }} >
              <LazyLoadImage src={e.img} className=" w-50 " effect="blur"
              />
            </SwiperSlide>
          )
        }
      </Swiper></>
  )
}
