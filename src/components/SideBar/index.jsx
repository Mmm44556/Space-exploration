import { useState, useEffect, Suspense,useCallback } from 'react';
import Badge from 'react-bootstrap/Badge';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import PubSub from 'pubsub-js';
import { msg1 } from './msg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../assets/css/utilities.css';
export default function SideBar(props) {
  const [isToggleNews, setIsToggleNews] = useState(true);
  const [info, setInfo] = useState(() => {
    let i = msg1();
    return (i[1])
  });
  
  useEffect(() => {
    return ()=>{
      PubSub.subscribe('slideID', getNews)
      PubSub.subscribe('toggleNews', toggleNews)
    }
  }, [])
  //開關新聞
  const toggleNews = useCallback((msg, data) => {
    setIsToggleNews((v) => !v)
  }, [isToggleNews])

  const getNews = (Msg, ID) => {
    let id = ((Number(ID)) - 1);
    let news = msg1();
    // console.log(id)
    setInfo(() => news[id]);
  }

  const paras = {
    borderRadius:"0.125rem",
    lineHeight: 1,
    objectFit:"cover"
  }


  return (
    <>
      <ListGroup as="ol" className={`news position-absolute ${isToggleNews ? "slideDown" : "slideUs"}`} style={{ right: "0", zIndex: "3" }} >

        {info.map((e, index) => (

          <ListGroup.Item action as="li"
           className="d-flex justify-content-between align-items-start bg-light mb-1 "
           alt={e.class}
            key={e.id}
            >
            <Figure className="my-0">
              <Suspense fallback={<h1 className='position-absolute'>loading...</h1>}>
                <LazyLoadImage style={paras}
                  width={100}
                  height={50}
                  src={e.Img}
                  effect="blur"
                />
              </Suspense>
            </Figure>
            <div className="ms-2 me-auto detail  " >
              <div className="fw-bold d-inline-block">{e.Title}</div>
              {e.subTitle}
            </div>
            <Badge bg="" className=" text-dark fs-6" pill>
              {e.date}
            </Badge>
            <Badge pill as="button" bg="secondary">
              Detail
            </Badge>
          </ListGroup.Item>

        )
        )
        }
      </ListGroup >
    </>
  );
}

