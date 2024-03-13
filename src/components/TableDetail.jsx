import {Table} from "react-bootstrap";  

function TableDetail ({room}){
  const index=0;
  
  // Verifica si room tiene un valor definido antes de intentar acceder a su propiedad devices
  if (!room || !room.devices || room.devices.length === 0) {
      return <div>No hay dispositivos disponibles.</div>;
  }
  console.log('aaa'+room.devices);
  return (
      <div style={{ flex: '0 0 25%', margin: '10px 0px' }}>
        <Table style={{width:'500px'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Device</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {room.devices.map((device, index) => (
              <tr key={device.id}>
                  <td>{index + 1}</td>
                  <td>{device.id}</td>
                  <td>{device.name}</td>
                  <td>{device.desired ? device.desired.value : '-'}</td>
              </tr>
              ))}
          </tbody>
        </Table>
      </div>
  );
}


export default TableDetail;