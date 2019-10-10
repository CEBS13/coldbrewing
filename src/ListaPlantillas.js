import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import MenuLateral from './MenuLateral';
import ListaUsuarios from './ListaUsuarios';
import NavBar from './NavBar';
import TarjetasPlantillas from './TarjetasPlantillas';
import ListGroup from 'react-bootstrap/ListGroup';


const StyleLista = styled.section`

    
    heigth: 100vh;    




`


const ListaPlantillas = () => {
    return ( 
        <div>
            <StyleLista>
                <ListGroup as="ul">
  <ListGroup.Item as="li" active>
    Cras justo odio
  </ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Morbi leo risus
  </ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
</StyleLista>
        </div>
     );
}
 
export default ListaPlantillas;