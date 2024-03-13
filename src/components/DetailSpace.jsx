import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Rooms from './Rooms';
import TableDetail from './TableDetail';
import {Col} from 'react-bootstrap';

function DetailSpace(){

    const params = useParams();
    const[room, setRooms]=useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(url)
            .then(response => response.json())
            .then((data) => {
              const filteresDev = data.filter(room => {
                  const homeId=room.homeId === (params.spaceId);
                  const device= room.devices.some(device => device.id === params.deviceId)
                  return homeId && device
                });
                setRooms(filteresDev);
                
            })
    }, [params]);
    if (loading) {
        return <div>Cargando...</div>; // Mostrar un indicador de carga
    }

    // Verificar si room tiene algún elemento antes de acceder a sus propiedades
    if (!room || room.length === 0) {
        return <div>No se encontraron datos para la habitación especificada.</div>;
    }
    console.log(room[0].devices);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Rooms />
            <TableDetail room={room[0]} />
        </div>
    );

};

export default DetailSpace;