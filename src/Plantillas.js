import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Encabezado from './Encabezado';
import FormControl from 'react-bootstrap/FormControl';
import Tarjetas from './Tarjetas';



const Plantillas = () => {

    const Imagen1 = require('./img/plantilla-1.webp');
    const Imagen2 = require('./img/plantilla-2.webp');
    const Imagen3 = require('./img/plantilla-3.webp');
    const Imagen4 = require('./img/plantilla-4.webp');
    const Imagen5 = require('./img/plantilla-5.webp');
    return ( 
        <div>
            <Row  style={{backgroundColor:"#F3E367" ,height: "40vh" }}>
                <Row style={{height:"50vh"}}> 
                        
                </Row>

                <Row style={{ height:"50vh", display:"flex", alignItems:" center"}}>
                    <FormControl type="text" placeholder="Search" aria-label="Search"></FormControl>
                </Row>
            </Row>

            <Row style={{backgroundColor:"white", display:"felx", justifyContent:"space-around", alignItems: "center"}}>
                
            <Tarjetas imagenUrl= {Imagen1} ></Tarjetas>
            <Tarjetas></Tarjetas>
            <Tarjetas></Tarjetas>
            <Tarjetas></Tarjetas>
            <Tarjetas></Tarjetas>
            <Tarjetas></Tarjetas>
            <Tarjetas></Tarjetas>
                








            </Row>
        </div>
     );
}
 
export default Plantillas;