import { useEffect, useState, useCallback, useRef } from 'react';
import ReactPlayer from 'react-player'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineZoomOutMap } from "react-icons/md";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
const instance = axios.create({
  baseURL: 'https://images-api.nasa.gov',
})
export const NasaImages = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [img, setImg] = useState(null)
  const [page, setPage] = useState(0);
  const [initialPage, setInitialPage] = useState(0);
  const divRef = useRef(null);

  const focus = (e) => {
    divRef.current.focus();
  }
  const keyDown = (e) => {
    console.log(e.keyCode)
  }
  const Example = () => {
    return (
      <div style={{ position: 'fixed', zIndex: '6', top: "50%", left: '50%', transform: "translate(-50%,-50%)" }}>
        <TransformWrapper

        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div onClick={focus} ref={divRef} tabIndex={0} onKeyDown={(e) =>{
                console.log(e)
                if(e.keyCode!=27) return
                  resetTransform()
              }}onBlur={()=>alert('bour')}>
                <TransformComponent>
                  <div className="w-100 text-center" >
                    <LazyLoadImage effect='blur' src="https://images-assets.nasa.gov/image/PIA01120/PIA01120~orig.jpg" alt="test" style={{ width: "75%" }} />
                  </div>

                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  };
  useEffect(() => {
    instance['get'](`/search?q=mars&media_type=image&page=1&page_size=3&year_start=1920&year_end=2003`).then((result) => {
      setImg(() => result.data.collection)
      setIsLoading(true);
    }, (err) => {
      console.log(err);
    })
  }, [isLoading])

  const next = useCallback(() => {
    let nextUrl = img.links[page].href;
    instance['get'](nextUrl).then((result) => {
      //取得資料時page +1
      setImg(() => result.data.collection)
      setPage(() => 1)
      setInitialPage((v) => v + 1)
    })

  }, [page, img, initialPage])


  const prev = useCallback(() => {
    let nextUrl = img.links[0].href;
    instance['get'](nextUrl).then((result) => {
      setImg(() => result.data.collection)
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

  return (isLoading ? <div >
    <div className='position-relative ' style={{ height: '45px' }}>
      {initialPage ? <Badge bg="secondary" onClick={prev} as="button">Previous</Badge> : ""}
      <Badge bg="secondary" className='position-absolute end-0' onClick={next} as="button">Next</Badge>
      <Example />
    </div>
    <CardGroup  >
      {
        img.items.map((e) => <Card key={e.data[0].nasa_id} className="w-100 lazyBox" style={{ height: "300px", backgroundColor: "unset" }}>
          <LazyLoadImage effect='blur' src={e.links[0].href} alt={e.data[0].title} className="w-100 h-50  border rounded" style={{ objectFit: "contain", }} />

          <Card.Body>
            <Badge bg="Light" className=" position-absolute top-0 end-0 fs-5 CardZoomIn" >
              <MdOutlineZoomOutMap />
            </Badge>
            <Card.Text className="te text-decoration-underline" >
              <a href={`https://images.nasa.gov/details/${e.data[0].nasa_id}`} target='_blank'>
                {e.data[0].description}
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted fs-5">Last updated {e.data[0]['date_created']}</small>
          </Card.Footer>
        </Card>)
      }
    </CardGroup></div > : "")

}