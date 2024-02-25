import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import { FaWpexplorer, FaSpaceShuttle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import PubSub from 'pubsub-js';
import { footerBg } from '../../Footer/bgMsg'
import { UFO, Half } from '../../assets';
import { NasaImages } from './stream';

import '../../assets/css/utilities.css' 
let imgArr = footerBg();
export default function Banner(props) {

  const { showAll } = props;
  const [startExploration, setStartExploration] = useState(false);
  const [startBtn, setStartBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(() => {
    let imgArr = footerBg();
    return imgArr[0]
  });

  //點擊後掛載星球
  const explore = () => {
    showAll();
    setStartBtn(false)
    setStartExploration(true)
  }

  useEffect(() => {

    //清除banner組件
    if (startExploration) {
      // console.log('@')
    
      const timer = setTimeout(() => {
        setIsLoading(false)
        PubSub.publish('done', { done: 'ok' })
      }, 5000);

      return () => {
        clearTimeout(timer);
        
      }
    }
    return ()=>{
      PubSub.subscribe('slideID', InfoBanner)
    }
  }, [startBtn])

  const InitialBanner = () => {
    return (

      (<div className={`position-fixed  text-center start-50 h-50 exploreBox   ${startExploration ? 'startExploration' : ''}`} style={{ marginTop: "100px", transform: " translate(-50%, 0%)", opacity: ".9", zIndex: "2" }} >
        {startExploration ? <Image src={UFO} className="w-25 position-absolute ufo0" fluid alt='UFO' /> : ''}
        <br /><h1 className={`text-lg ${startExploration ? 'Text0' : ''}`} >{`S P A C E`}<FaSpaceShuttle style={{ transform: "rotateZ(-80deg)" }} /><br /></h1>
        <section className="fs-5 text-capitalize">
          {!startExploration ? <Image src={UFO} className='w-25 position-absolute ufo1' fluid alt='UFO' /> : ''}
          <span className={`${startExploration ? 'Text1' : ''}`}>During the time that has passed since the launching of the first artificial satellite in 1957, astronauts</span>
          <span className="Text4">have traveled to the moon,</span><span className={`${startExploration ? 'Text2' : ''}`}> probes have explored the solar system, </span>and instruments
          <span className={`${startExploration ? 'Text3' : ''}`}> in space have discovered thousands of planets around other stars.</span></section>
        {startBtn && (<Button variant="warning" className="startBtn" size="lg" onClick={explore}>START<FaWpexplorer /></Button>)}


        <div className="circleBox">
          <div className="circle  border">.</div>
          <div className="circle2  border">.</div>
          <div className="circle3  border">.</div>
        </div>

        <Image src={Half} fluid className="position-fixed opacity-50  " style={{ left: "-60%", top: "0%", width: "60%" }} />;




      </div>
      )
    )
  }
  //接收到當前選擇的星球
  const InfoBanner = (msg, ID) => {
    // console.log(info)
    if (typeof ID !== 'object') {
      let fn = (e) => e.id === ID;
      let updateImg = imgArr.filter(fn);
      setInfo(() => updateImg[0])
    }

    return (<>
      <section className='text-center'>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Mars">
          <Row>
            <Col sm={3} xl={2} md={3} className="baSelect">
              <ListGroup horizontal={'xxl' | 'xl' | 'lg' | 'md'} variant='light' >
                <ListGroup.Item action href="#Mars" variant='light' >
                 {info.subTitle}
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" variant='light'>
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9} xl={10} md={9} style={{ zIndex: "3" }} className="ba">
              <Tab.Content>
                <Tab.Pane eventKey="#Mars" className="text-start fs-4 tabBox">
                  <p>
                    {info.descriptions} 
                  </p>
                  <div>
                    <NasaImages currentP={info.subTitle}/>
                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
    </>
    )
  }



  return (<>
    {isLoading ? <InitialBanner /> : <InfoBanner />}
  </>)






}
