import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { GiAstronautHelmet } from "react-icons/gi";
import './style.css'
const NewsList = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <>
      {show && show1 ? null : <aside
        className={`position-fixed end-0  w-25 hint start_news_List`}>
        <div
          aria-live="polite"
          aria-atomic="true"
          className=" position-relative"
          style={{ minHeight: '240px' }}
        >
          <ToastContainer position="top-end" >
            <Toast bg={"secondary"} style={{ fontSize: "1em" }} onClose={() => setShow(true)} show={!show} delay={6000}>
              <Toast.Header>
                <GiAstronautHelmet />
                <strong className="me-auto">Prompt!</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>點擊START開啟探索</Toast.Body>
            </Toast>
            <Toast bg={"secondary"} style={{ fontSize: "1em" }} onClose={() => setShow1(true)} show={!show1} delay={6000}>
              <Toast.Header>
                <GiAstronautHelmet />
                <strong className="me-auto">Prompt!</strong>
                <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Click the button to start your exploration.</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </aside>}

    </>
  )


}


export default NewsList;