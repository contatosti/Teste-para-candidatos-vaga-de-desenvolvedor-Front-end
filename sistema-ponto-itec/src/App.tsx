import React from 'react';
import './App.css';
import { Login } from './pages/Login/login';
import { Recuperacao } from './pages/RecuperacaoSenha/recuperacao';
import { Alterar } from './pages/AlterarSenha/alterar';

function App() {
  return (
    <div className="App">
      {/* <Alterar/> */}
      {/* <Recuperacao /> */}
      <Login />
    </div>
  );
}

export default App;
