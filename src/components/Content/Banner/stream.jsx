import { useEffect, useState, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineZoomOutMap } from "react-icons/md";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import axios from 'axios';
import { IoMdRocket } from "react-icons/io";
import style from '../../../components/assets/styles/animation.module.css';

export const NasaImages = ({ currentP }) => {

  const [isLoading, setIsLoading] = useState(null)
  const [show, setShow] = useState(false)
  const [img, setImg] = useState(null)
  const [page, setPage] = useState(0);
  const [initialPage, setInitialPage] = useState(0);
  const [initialUrl, setInitialUrl] = useState(currentP)
  const divRef = useRef(null);
  
  //放大圖片
  const OriginImg = ({ url }) => {
    return (
      <div className="border" style={{ position: 'fixed', zIndex: '6', top: "50%", left: '50%', transform: "translate(-50%,-50%)" }}>
        <TransformWrapper

        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div>
                <TransformComponent>
                  <div className="w-100 text-center" >
                    <LazyLoadImage effect='blur' src={url} alt="test" style={{ width: "100%" }} />
                  </div>

                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  };
  //掛載初始化
  useEffect(() => {
    axios.get(`https://images-api.nasa.gov/search?q=${initialUrl}&media_type=image&page=1&page_size=3&year_start=1920&year_end=2003`).then((result) => {
      result.data.collection.items.forEach((e) => e.isActive = false)
      setImg(() => result.data.collection)
      setIsLoading(() => [...result.data.collection.items]);
      setShow(true)
    }, (err) => {
      console.log(`I'm sorry somethings wrong~ ,${err}`);
    })
  }, [initialUrl])
  //下一頁圖片
  const next = useCallback(() => {
    let nextUrl = img.links[page].href;
    axios.get(nextUrl).then((result) => {
      //取得資料時page +1
      result.data.collection.items.forEach((e) => e.isActive = false)
      setImg(() => result.data.collection)
      setIsLoading(() => [...result.data.collection.items]);
      setPage(() => 1)
      setInitialPage((v) => v + 1)
    })

  }, [page, img, initialPage])
  //上一頁圖片
  const prev = useCallback(() => {
    let nextUrl = img.links[0].href;
    axios.get(nextUrl).then((result) => {
      result.data.collection.items.forEach((e) => e.isActive = false)
      setImg(() => result.data.collection)
      setIsLoading(() => [...result.data.collection.items]);
      setInitialPage((v) => {
        //每次退回-1當到1時就是第1頁，關閉退回鍵
        if (v == 1) {
          setPage(() => 0);
          return 0
        };
        return v - 1;
      })
    })
  }, [page, img, initialPage])

  const zoomIn = (index) => () => {
    //點擊放大圖片
    setIsLoading((prev) => {
      prev[index].isActive = true;
      return ([...prev])
    })
  }
  const zoomOut = (index) => () => {
    //失焦關閉圖片
    setIsLoading((prev) => {
      prev[index].isActive = false;
      return ([...prev])
    })
  }


  return (show ? <div >
    <div className='position-relative ' style={{ height: '45px' }}>
      {initialPage ? <Badge bg="secondary" onClick={prev} as="button">Previous</Badge> : ""}
      <Badge bg="secondary" className='position-absolute end-0' onClick={next} as="button">Next</Badge>

    </div>
    <CardGroup  className='cardGap'>
      {
        isLoading.map((e, index) => <Card className="w-100 lazyBox" style={{ height: "300px", backgroundColor: "unset" }} key={e.data[0].nasa_id}>
          <LazyLoadImage effect='blur' src={e.links[0].href} alt={e.data[0].title} className="w-100 h-50  border rounded" style={{ objectFit: "contain", cursor: "pointer" }}
            ref={divRef}
            tabIndex={0}
            onClick={zoomIn(index)}
            onBlur={zoomOut(index)}
            onKeyDown={zoomOut(index)}
          />

          {isLoading[index].isActive ? <OriginImg url={e.links[0].href} /> : null}

          <Card.Body>
            <Badge bg="Light" className=" position-absolute top-0 end-0 fs-5 CardZoomIn" >
              <MdOutlineZoomOutMap />
            </Badge>
            <Card.Text className="te text-decoration-underline" >
              <a href={`https://images.nasa.gov/details/${e.data[0].nasa_id}`} target='_blank'>
                {e.data[0]['description']}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted fs-5">Last updated {e.data[0]['date_created']}</small>
          </Card.Footer>
        </Card>)

      }
    </CardGroup></div > : <h1 className="fs-3 text-white text-center position-relative">
      <IoMdRocket className={style.circle_fly}/>
      Loading...</h1>)

}