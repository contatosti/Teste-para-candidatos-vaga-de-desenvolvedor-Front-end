import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Recuperacao } from './pages/RecuperacaoSenha/recuperacao';
import { Alterar } from './pages/AlterarSenha/alterar';
import { Painel } from './pages/PainelPrincipal/painel';
import { Ponto } from './pages/PontoEletronico/ponto';

function Paths() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/recuperacao-senha" element={<Recuperacao />} />
            <Route path="/alteracao-senha" element={<Alterar />} />
            <Route path="/painel-principal" element={<Painel />} />
            <Route path="/ponto-eletronico" element={<Ponto />} />
          </Routes>
      </BrowserRouter>
    );
}
  
export default Paths;
  