import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import aptoPng from "./apto.png";
import casaPng from "./casa.png"


function Space({sp}){
    return (
    <Card style={{  width: '200px', height: '200px' }}>
        <Link to={'/spaces/' + sp.id}>
            <Card.Img
                variant="top"
                style={{width:'80px',height:'80px'}}
                src={sp.type === 'house' ? casaPng : sp.type === 'loft' ? aptoPng : casaPng}
                 alt={sp.name}
            />
        </Link>
        <Card.Body className="mb-3">
            <Link to={'/spaces/' + sp.id}>
                <Card.Title style={{color:'black'}}>{sp.name}</Card.Title>
            </Link>
            <Card.Text>{sp.address}</Card.Text>
        </Card.Body>
    </Card>  
    );

}

export default Space;