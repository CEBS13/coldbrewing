import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const StyleImagen = styled.section`

    width: 110px;
    height: 110px;
    padding: 2px 2px 2px 2px;
   
    border-style: solid;
    border-width: 3px;
    border-color: #DFE1C8;
    border-radius:5px;
    
    
    


`

const style ={
    width: "100px",
    height: "100px"
}

const  ImagenTarjetas = (props)  => {
  // Import result is the URL of your image

  return(
  
            <React.Fragment>
                <StyleImagen>
                    <Row>
                        <Col className="justify-content-center">
                        <img src={props.imagenUrl} alt="palceholder" style={style}/>

                        </Col>
                    </Row>
                    
                </StyleImagen>
            </React.Fragment>
  
  );
  
  
}

export default ImagenTarjetas;