import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Login from './Login';
import AdminMenu from './AdminMenu';
import Configuracion from './Configuracion';
import Proyectos from './Proyectos';
import Plantillas from './Plantillas';



function App() {
  return (
    <React.Fragment>
      
          <Router>
            <div>
            


            <Route exact path="/" component={Login} />
            <Route path="/AdminMenu" component={AdminMenu} />
            <Route path="/Configuracion" component={Configuracion}/>
            <Route path='/Proyectos' component={Proyectos}/>
            <Route path='/Plantillas' component={Plantillas}/>
            
            
          </div>
        </Router>
          
    </React.Fragment>
  );
}


export default App;
