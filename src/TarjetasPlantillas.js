import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImagenTarjetas from './ImagenTarjetas';

const StyleTarjetas = styled.section`

    padding: 20px 20px 20px 20px;
    margin: 20px 20px 20px 20px;
    border-style: solid;
    border-width: 5px;
    border-color: #DFE1C8;
    border-radius:5px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.25) ;

    &:hover{
        background-color: #FAFBEF;
    }


`

const Tarjetas = () => {
    return (  
        <React.Fragment>
            <StyleTarjetas>
                <Row>
                  
                    soy una tarjeta    

                    
                </Row>
            </StyleTarjetas>
        </React.Fragment>
    );
}
 
export default Tarjetas;