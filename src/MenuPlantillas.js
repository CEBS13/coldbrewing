import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AgregarPagina from './AgregarPagina';
import MenuLateral from './MenuLateral';
import ListaUsuarios from './ListaUsuarios';
import NavBar from './NavBar';
import TarjetasPlantillas from './TarjetasPlantillas';
import ListaPlantillas from './ListaPlantillas'; 
import Tarjetas from './Tarjetas';

class MenuPlantillas extends React.Component {
    
    state = {  }
    
    render() { 
        return ( 
            
            <div >
                <Row>
                    <NavBar></NavBar>
                    </Row>
            <Row>
                
                <Col md ='1' style={{margin:'20px 20px 20px 20px'}}>
                <MenuLateral hasColor={true} ></MenuLateral>
                </Col>

                <Col md="5">
                <Tarjetas></Tarjetas>

                </Col>

                <Col md="5">
                <Tarjetas></Tarjetas>

                </Col>


                <Col md="5">
                <Tarjetas></Tarjetas>

                </Col>
           
                
            </Row>

        </div>
      
        );
    }
}
 
export default Configuracion ;