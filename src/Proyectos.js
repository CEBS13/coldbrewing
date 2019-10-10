import React from 'react';
import Tarjetas from './Tarjetas';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar from './NavBar'; 
import MenuLateral from './MenuLateral';
import FloatButton from "./FloatButton";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


const Proyectos = () => {
    return ( 
        <div>
        <Row>
        <NavBar>
            
        </NavBar>
        </Row>
            <Row>

                <Col md='3'>
                

                <Tarjetas></Tarjetas>


                </Col>

                <Col md='3'>
                

                <Tarjetas></Tarjetas>


                </Col>

                <Col md='3'>
                

                <Tarjetas></Tarjetas>


                </Col>

                <Col md='3'>
                

                <Tarjetas></Tarjetas>


                </Col>

            </Row>

            <Row>
                <FloatButton><NavLink to="./Plantillas" style={{color:"white"}}><FontAwesomeIcon icon={faPlus} /></NavLink></FloatButton>
            </Row>

        </div>
     );
}
 
export default Proyectos;
