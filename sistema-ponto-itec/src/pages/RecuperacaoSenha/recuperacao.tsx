import * as React from 'react';
import "./styles.css";

export function Recuperacao() {

    return (
        <div className="flex vh-100 background-azul justify-content-center align-items-center">

            <img src="logobg.png" alt="Logo no background" className="background-logo" />

            <section className="d-flex flex-column container justify-content-center align-items-center" >

                <h1 className="nome-orgao text-white text-center">[NOME DO ORGÃO]</h1>

                <p className="nome-gestor text-white text-center">Solicitação de alteração de senha</p>

                <div className="div-input-icone input-group ">
                    <input className="input-usuario" type="email" placeholder="Email"/>
                    <img src="usuario.png" alt="" className="icone"/>
                </div>

               

                <button className="btn btn-primary btn-entrar">Solicitar alteração</button>


            </section>

            <footer className="d-flex flex-column w-full justify-content-center align-items-center footer-content">

                <img src="ativo.png" alt="Logo e iso" />

                <p className="versao-text text-white">2022 - versão 1.0</p>

            </footer>

                                        
        </div>
    )
  
}