import React, { useEffect, useState } from 'react'
import {Col} from 'react-bootstrap'
import Space from './Space'

function Spaces(){

    const [spaces, setSpaces] = useState([]);
    useEffect(()=> {
        const url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(url).then(response => response.json()).then((data) => {
            setSpaces(data);
        })
      }, []);
    return(
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop:'10px' }}>
        {spaces.map((space) => (
          <Col key={space.id} style={{ flex: '0 0 20%' }}>
            <Space sp={space} />
          </Col>
        ))}
      </div>
    )

}

export default Spaces;