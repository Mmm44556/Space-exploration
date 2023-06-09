import { Fragment, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { footerImg } from './msg';

// const img = footerImg();
export default function Footer() {

  const [planets, setPlanets] = useState(() => footerImg());


  const prevItem = () => {
    setPlanets(prev => {
      let obj = prev.shift();
      prev.push(obj);
      return [...prev]
    })
  }
  const nextItem = () => {
    setPlanets(prev => {
      let obj = prev.pop();
      prev.unshift(obj);
      return [...prev]
    })
  }
  useEffect(() => {
    // console.log(planets, '123')
  }, [planets])

  return (
    <Container className="position-absolute start-50" style={{ transform: "translate(-50%, -50%)",bottom:"-20%" }}>
      <Row className=" position-relative footerBox">
        <Button variant="outline-none position-absolute bottom-50" style={{ width: "5%" }} onClick={prevItem}><BsFillArrowLeftCircleFill className="fs-1" /></Button>
        {
          planets.map((e, index, arr) => {
            if (index < 2) {
              return (
                <Col xl={6} className=" bottom-0 text-center " key={e.id} >
                  <LazyLoadImage src={e.img} className=" opacity-50 floating" style={{
                    width: "20%", WebkitBoxReflect: " right -100px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3))",
                  }} />

                </Col>
              )
            }
            if(index==3){
              return (
              <Col xl={4} className=" bottom-0 text-center " key={e.id}>
                <LazyLoadImage src={e.img} className=" opacity-50 floating" style={{
                  width: "40%", WebkitBoxReflect: " right -100px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3))",
                }} />

                <ButtonGroup size="sm" as="div" style={{ display: "block" }}>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Col>
              )
            }
            return (
              <Col xl={4} className=" bottom-0 text-center " key={e.id}>
                <LazyLoadImage src={e.img} className=" opacity-50 floating" style={{
                  width: "40%", WebkitBoxReflect: " right -100px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3))",
                }} />

               
              </Col>
            )
          })
        }
        <Button variant="outline-none position-absolute bottom-50 end-0 " style={{ width: "5%" }} onClick={nextItem}><BsFillArrowRightCircleFill className="fs-1" /></Button>
      </Row>
    </Container>





  )
}
