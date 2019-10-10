import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { createRequireFromPath } from 'module';

const StyleTarjetas = styled.section`

    padding: 20px 20px 20px 20px;
    margin: 20px 20px 20px 20px;
        
    background-color: white;

    &:hover{
        background-color: #FAFBEF;
    }


`

const Tarjetas = (props) => {
    return (  
        <React.Fragment>
            <StyleTarjetas>
                <Row>
                    <Col md="3" style={{margin:'30px 20px 30px 20px'}}>
                    <img src= {props.imagenUrl} alt="palceholder"  style={{ width: "400px", height:"350px"}}/>
                    </Col>

                    <Col sm ="9">
                        <Row className="justify-content-center" style={{margin: "20px 20px 20px 20px"}}> 
                            <h3> Website.com</h3>
                            
                        </Row>
                        <Row className="justify-content-center">
                            <h6> Visitantes: 800</h6>
                        </Row>
                        <Row className="justify-content-center">
                            <h6> posts: 30</h6>
                        </Row>
                        

                    </Col>
                </Row>
            </StyleTarjetas>
        </React.Fragment>
    );
}
 
export default Tarjetas;