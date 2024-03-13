import React, { useEffect, useState } from 'react'
import {Col} from 'react-bootstrap';
import Room from './Room';
import { useParams } from "react-router-dom";

function Rooms() {
  const params = useParams();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
      const url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
      fetch(url)
          .then(response => response.json())
          .then((data) => {
            const filteredRooms = data.filter(room => {
                return room.homeId === (params.spaceId);
              });
              setRooms(filteredRooms);
          })
          .catch(error => console.error("Error fetching data: ", error));
  }, [params]);

  console.log(rooms)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px', marginLeft: '0px', marginRight: '-10px' }}>
        {rooms.map((room) => (
            <Col key={room.id} style={{ flex: '0 0 20%', margin: '10px 0px', padding: '0px' }}>
                <Room rm={room}/>
            </Col>
        ))}
    </div>   
);
}


export default Rooms;