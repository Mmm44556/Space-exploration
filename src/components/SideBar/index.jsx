import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { msg } from './msg';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function SideBar(props) {
  const [isShowMsg, setIsShowMsg] = useState(false);


  const paras = {
    marginBottom: "0.5rem",
    lineHeight: 1,
    maxWidth: "100%",
    height: "auto"
  }
  
  const info = msg();
  return (
    <>
      {props.isShow ? <ListGroup as="ol" className="opacity-50 w-25 position-absolute" style={{ left: "75%", top: "25%" }} >
        {
          info.map((e, index) =>{ 
            return(
            <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start bg-light " key={e.id}>
              <Figure className="my-0">
                <LazyLoadImage style={paras}
                  width={70}
                  height={0}
                  src={e.Img}
                  effect="blur"
                  
                />
              </Figure>
              <div className="ms-2 me-auto">
                <div className="fw-bold ">{e.Title}</div>
                {e.subTitle}
              </div>
              <Badge bg="" className=" text-dark fs-6" pill>
                {e.date}
              </Badge>
            </ListGroup.Item>
          )})
        }
      </ListGroup > : ""
      }
    </>
  );
}

