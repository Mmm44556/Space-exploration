import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { footerImg } from './msg';
const paras = {
  border: "1px solid #FFFFFF",
  height: "200px",
  width: "50%",
  borderRadius: "50%"
}
export default function Footer() {
  const img = footerImg();
  return (



    <Container className="position-absolute bottom-0 end-0">
      <Row className="">
        {
          img.map((e, index, arr) => {
            if (index > 2) return;
            return (
              <Col xl={4} className=" bottom-0 text-center ">
                <Image src={e.img} roundedCircle className=" opacity-50 " style={{
                  width: "55%", WebkitBoxReflect: " right -100px -webkit-linear-gradient(transparent, transparent 50%, rgba(255, 255, 255, .3))",
                }} />

                <ButtonGroup size="sm" as="div" style={{ display: "block" }}>
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Col>
            )
          })
        }
      </Row>
    </Container>





  )
}
