import Button from 'react-bootstrap/Button';
export default function Banner( props) {
  const {  showAll } = props;


 
  return (

    <div className="position-fixed  text-center start-50 h-50" style={{ marginTop: "100px", transform: " translate(-50%, 0%)",opacity:".9"  }} >
      <h1 ><br /><span className="wrap" >{`S P A C E`}<br />EXPLORATION</span></h1>
      <p className="fs-5 text-capitalize">During the time that has passed since the launching of the first artificial satellite in 1957, astronauts have traveled to the moon, probes have explored the solar system, and instruments in space have discovered thousands of planets around other stars.</p>
      <Button variant="warning" size="lg" onClick={showAll}>START</Button>
      <div className="circleBox">
        <div className="circle  border">.</div>
        <div className="circle2  border">.</div>
        <div className="circle3  border">.</div>
      </div>
     
    </div>




  )
}
