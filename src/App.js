import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Men} from './containers/Men';
import {Home} from './containers/Home';

function App() {
  return (
       <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/Men' element={<Men/>}>
        </Route>
       </Routes>

    
  );
}

export default App;
