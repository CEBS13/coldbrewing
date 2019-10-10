import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';


const StyleEncabezado = styled.section`

width: 100vw;
height: 40vh;
background-color: black;

	
`

const Encabezado = () => {
    return ( 
        
        <div> 
            <StyleEncabezado>
        <FormControl type="text" placeholder="Search" aria-label="Search"></FormControl>
        </StyleEncabezado>
        </div>
        
     );
}
 
export default Encabezado;