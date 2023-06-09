import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import {msg} from './msg';

export default function SideBar() {
  const info = msg();
  return (
    <ListGroup as="ol" className="opacity-50 w-25 position-absolute"style={{left:"75%",top:"25%"}}>
      {
        info.map((e, index) => (
          <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start bg-light " key={e.id}>
            <Figure className="my-0">
              <Figure.Image
                width={70}
                height={0}
                alt="171x180"
                src={e.Img}
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
        ))
      }
    </ListGroup>
  );
}

