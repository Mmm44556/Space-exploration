import { Col, Container, Row } from "react-bootstrap";

export default function Banner() {
  return (

    <div className="position-fixed text-center start-50 h-50" style={{ "margin-top": "100px", transform: " translate(-50%, 0%)", border: "5px solid 	#000000",opacity:".9"  }} >
      <h1 ><br /><span className="wrap" >{`S P A C E`}<br />EXPLORATION</span></h1>
      <p className="fs-5 text-capitalize">During the time that has passed since the launching of the first artificial satellite in 1957, astronauts have traveled to the moon, probes have explored the solar system, and instruments in space have discovered thousands of planets around other stars.</p>

      <div className="circleBox">
        <div className="circle  border">.</div>
        <div className="circle2  border">.</div>
        <div className="circle3  border">.</div>
      </div>
      <button onClick={() => console.log('connect')}>Let's connect</button>
    </div>




  )
}
