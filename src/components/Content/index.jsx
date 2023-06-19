import { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from '../SideBar'
import Banner from "./Banner";

export default function Content(props) {



  return (

    <section className="content" >
      <div className="solarBox">
        <span className="solar"></span>
      </div>
      <Container >
        <Row className="position-relative">
          <Col xs={11} md={11} xl={11}>
            <Banner show={props.isShow} showAll={props.showAll} />
          </Col>
          <Col xs={1} md={1} xl={1}>
            {!(props.isShow) && <div className="backgroundImg" />}
          </Col> 
         
        </Row> 
      
      </Container>



    </section>




  )
}

