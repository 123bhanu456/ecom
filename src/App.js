import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './containers/Home';
import {Mycart} from './components/Mycart'
import { Women } from './containers/Women';
import { Men } from './containers/Men';
import { Kids } from './containers/Kids';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {LoginHome} from './containers/LoginHome';
function App() {
  return (
       <Routes>
        <Route path='/LoginHome' element={<LoginHome/>}>
        </Route>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/Women' element={<Women/>}>
        </Route>
        <Route path='/Men' element={<Men/>}>
        </Route>
        <Route path='/Kids' element={<Kids/>}>
        </Route>
        <Route path='/Mycart' element={<Mycart/>}>
        </Route>
        <Route path='/Signup' element={<Signup/>}>
        </Route>
        <Route path='/Login' element={<Login/>}>
        </Route>
       </Routes>

    
  );
}

export default App;
