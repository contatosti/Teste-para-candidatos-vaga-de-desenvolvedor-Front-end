import React from 'react';
import './App.css';
import { Login } from './pages/Login/login';
import { Recuperacao } from './pages/RecuperacaoSenha/recuperacao';
import { Alterar } from './pages/AlterarSenha/alterar';
import { Painel } from './pages/PainelPrincipal/painel';

function App() {
  return (
    <div className="App">
      <Painel/>
      {/* <Alterar/> */}
      {/* <Recuperacao /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
