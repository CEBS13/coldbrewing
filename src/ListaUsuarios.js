import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { genericTypeAnnotation } from '@babel/types';



const StyleTarjetas = styled.section`

    padding: 20px 20px 20px 20px;
    margin: 20px 20px 20px 20px;
    background-color: white;

    &:hover{
        background-color: #FAFBEF;
    }


`


const ListaUsuarios = () => {
    return ( 
        <React.Fragment>
        <StyleTarjetas>
            <Row style={{padding:'20px 20px 20px 20px'}}>
            <Table>
  <thead>
    <tr style={{backgroundColor:'#f7f7f7'}}>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
   

                
            </Row>
        </StyleTarjetas>
    </React.Fragment>


     );
}
 
export default ListaUsuarios;