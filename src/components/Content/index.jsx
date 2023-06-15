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
        <Row className="banner">
          <Col xs={12} md={6} xl={6}>
            <Banner show={props.isShow} showAll={props.showAll} />
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="backgroundImg" />
          </Col>
        </Row>

        <Row >
          <Col xs={12} md={6} xl={10} >


          </Col>
          <Col xs={12} md={6} xl={2} >
            {/* {
              props.isShow ?
                <Suspense fallback={<h1>Loading....</h1>}>
                  <SideBar isShow={props.isShow} />
                </Suspense>
                : ""
            } */}

          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} xl={12} >

          </Col>
        </Row>
      </Container>



    </section>




  )
}

