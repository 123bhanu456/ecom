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
import { Displaypage } from './components/Displaypage';
function App() {
  const islog=window.localStorage.getItem("LoggedIn");
  return (
       <Routes>
        <Route path='/' element={<LoginHome/>}>
        </Route>
        <Route path='/UserHome' element={islog ==='true'?<Home/>:<LoginHome/>}>
        </Route>
        <Route path='/Women' element={islog ==='true'?<Women/>:<LoginHome/>}>
        </Route>
        <Route path='/Men' element={islog ==='true'?<Men/>:<LoginHome/>}>
        </Route>
        <Route path='/Kids' element={islog ==='true'?<Kids/>:<LoginHome/>}>
        </Route>
        <Route path='/Mycart' element={islog ==='true'?<Mycart/>:<LoginHome/>}>
        </Route>
        <Route path='/Signup' element={<Signup/>}>
        </Route>
        <Route path='/Login' element={<Login/>}>
        </Route>
        <Route path='/display' element={islog ==='true'?<Displaypage/>:<LoginHome/>}>
        </Route>
       </Routes>

    
  );
}

export default App;
