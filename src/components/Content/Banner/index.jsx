import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { FaWpexplorer, FaSpaceShuttle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import PubSub from 'pubsub-js';
import { footerBg } from '../../Footer/bgMsg'
import { UFO, Half } from '../../assets';
const imgArr = footerBg();
export default function Banner(props) {

  const { showAll } = props;
  const [startExploration, setStartExploration] = useState(false);
  const [startBtn, setStartBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(() => imgArr[0]);

  //點擊後掛載星球
  const explore = () => {
    showAll();
    setStartBtn(false)
    setStartExploration(true)
  }

  useEffect(() => {

    //清除banner組件
    if (startExploration) {
      PubSub.subscribe('slideID', InfoBanner)
      const timer = setTimeout(() => {
        setIsLoading(false)
        PubSub.publish('done', { done: 'ok' })
      }, 5000);

      return () => {
        clearTimeout(timer);

      }
    }
  }, [startExploration])

  const InitialBanner = () => {
    return (

      (<div className={`position-fixed  text-center start-50 h-50 exploreBox   ${startExploration ? 'startExploration' : ''}`} style={{ marginTop: "100px", transform: " translate(-50%, 0%)", opacity: ".9", zIndex: "2" }} >
        {startExploration ? <Image src={UFO} className="w-25 position-absolute ufo0" fluid alt='UFO' /> : ''}
        <h1 ><br /><hgroup className={`${startExploration ? 'Text0' : ''}`} >{`S P A C E`}<FaSpaceShuttle style={{ transform: "rotateZ(-80deg)" }} /><br />EXPLORATION</hgroup></h1>
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

    if (typeof ID !== 'object') {
      let fn = (e) => e.id === ID;
      let updateImg = imgArr.filter(fn);
      setInfo(() => updateImg[0])
      return (<>
        <h1>{info.subTitle}</h1>
      </>
      )
    }
    return (<>
      <span className='text-center'><h1 className=' '>{info.subTitle}</h1> </span>
    </>
    )
  }

  const Additional = () => {

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }

  return (<>
    {isLoading ? <InitialBanner /> : <InfoBanner />}
  </>)






}
