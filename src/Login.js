import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import logo from './logo.png';
import Header from './Header';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




class Login extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>    
                 <Row  className="justify-content-center my-auto">
                  <Col className="justify-content-center my-auto">   
                
                    <Row className="justify-content-center">
                       <Header></Header>
                    </Row>
                    <Row className="justify-content-center">
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Usuario"/>
                            </Form.Group>
                    </Row>
                    <Row className="justify-content-center">
                        <Form.Group >
                            <Form.Label>Contrasena</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center ">
                        <Button type="Button"> <Link to="./Proyectos"> Iniciar Sesion</Link> </Button>
                    </Row>
                </Col>
                </Row>
            </React.Fragment>    
          );
    }
}
 
export default Login; 
