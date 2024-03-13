import {Card} from "react-bootstrap";
import roomPng from "./room.png";
import kitchen from "./kitchen.png";
import { Link } from "react-router-dom";

function Room({ rm }) {
    return (
        <Link to={`/spaces/${rm.homeId}/${rm.devices[0].id}`}>
            <Card style={{ width: '200px', height: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Card.Img
                        variant="top"
                        style={{ width: '100px', height: '100px' }}
                        src={rm.name === 'Living room' ? roomPng : rm.name === 'Kitchen' ? kitchen : roomPng}
                        alt={rm.name}
                    />
                </div>
                <Card.Body className="mb-3">
                    <Card.Title style={{ color: 'black', textAlign: 'center' }}>{rm.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}


export default Room;