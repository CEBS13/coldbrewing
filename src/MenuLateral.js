import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { bubble as Menu } from "react-burger-menu";


const StyleMenu = styled.section`

padding: 0px 20px 0px 20px;
height: 100vh;
background-color: ${props => props.hasColor ? "white" : "black" };
`


const MenuLateral = (props) => {
    return ( 
      
        <div >
         <StyleMenu hasColor={props.hasColor}>
              <Menu>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/burgers">
          Burgers
        </a>

        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>

        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
      </StyleMenu>
      </div>
         
    );
}
 
export default MenuLateral;