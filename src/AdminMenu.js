import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MenuLateral from './MenuLateral';
import ListaUsuarios from './ListaUsuarios';
import NavBar from './NavBar';





class AdminMenu extends React.Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div>    
                    <Row>
                        <Col md="1">

                    <MenuLateral pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                        
                        </Col>
                    
                        
                        
                        <Col>
                            <Row>
                                <NavBar></NavBar>
                            </Row>
                     
                    
                        
                            <Row className="justify-content-center">
                                <Col md= "4">

                                
                                </Col>

                                <Col md="7" style={{marginRight:'10px'}}>
                                <ListaUsuarios></ListaUsuarios>

                                </Col>                                
                                
                            </Row>


                        </Col>

                       
                        
                    </Row>
                </div>    
            </React.Fragment>
        );
    }
}
 
export default AdminMenu;