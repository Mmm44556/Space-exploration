import { useState, useEffect, Suspense } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Image } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import PubSub from 'pubsub-js';
import { msg1 } from './msg';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function SideBar(props) {

  const [info, setInfo] = useState(() => {
    let i = msg1();
    return (i[1])
  });
  useEffect(() => {
    PubSub.subscribe('slideID', getNews)
  }, [])

  const getNews = (Msg, ID) => {
    let id = ((Number(ID)) - 1);
    let news = msg1();
    console.log(id)
    setInfo(() => news[id]);
  }

  const paras = {
    marginBottom: "0.5rem",
    lineHeight: 1,
    maxWidth: "100%",
    height: "auto"
  }


  return (
    <>
      <ListGroup as="ol" className="news opacity-50 w-25 position-absolute" style={{ left: "75%", bottom: "0%", zIndex: "3" }} >

        {info.map((e, index) => (

          <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start bg-light mb-1 " alt={e.class} key={e.id}>
            <Figure className="my-0">
              <Suspense fallback={<h1 className='position-absolute'>loading...</h1>}>
                <LazyLoadImage style={paras}
                  width={70}
                  height={0}
                  src={e.Img}
                  effect="blur"
                />
              </Suspense>
            </Figure>
            <div className="ms-2 me-auto detail" >
              <div className="fw-bold ">{e.Title}</div>
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

