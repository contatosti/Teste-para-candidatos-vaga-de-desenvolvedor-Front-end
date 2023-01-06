import * as React from 'react';
import "./styles.css";

export function Ponto() {

    return (
        <div className="vh-100 justify-content-center align-items-center">
            <nav className="navbar navbar-dark background-azul">
                <div className="d-flex nav-container">
                    <a className="navbar-brand titulo-sistema" href="#">Sistema Ponto</a>
                    <button className="btn d-flex flex-row div-perfil">
                        <div className="d-flex flex-column text-white div-nome-perfil"> 
                            <p className="texto-perfil">Analísta - nível 1</p> 
                            <p className="texto-perfil2">Nome Sobrenome</p>
                        </div>
                        <img src="usuario-azul.png" alt="" className="icone-perfil"/>
                    </button>
                </div>
            </nav>

            <div className="d-flex flex-row h-100">

                <aside className="h-100 d-flex flex-column justify-content-between">

                    <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                    
                        <button type="button" className="btn d-flex btn-aside">
                            <img src="home.png" alt="" className="icone-aside"/>
                            <p className="text-aside">Página Inicial</p>
                        </button>

                        <button type="button" className="btn d-flex btn-aside">
                            <img src="cadastro.png" alt="" className="icone-aside"/>
                            <p className="text-aside">Cadastro</p>
                        
                        </button>

                        <button type="button" className="btn d-flex btn-aside">
                            <img src="relatorio.png" alt="" className="icone-aside"/>
                            <p className="text-aside">Relatório</p>
                        </button>

                    </div>

                    <footer className="d-flex flex-column w-full justify-content-center align-items-center footer-content-painel">
                        <img src="logoItec.png" alt="Logo e iso" />
                        <p className="versao-text">2022 - versão 1.0</p>
                    </footer>

                </aside>

                <section className="w-100">

                    <div className="d-flex justify-content-between py-4 px-5">

                        <h1 className="titulo-painel">Painel Principal</h1>

                        <div className="d-flex button-painel">

                            <a type="button" className="btn btn-danger btn-painel d-flex justify-content-center align-items-center">
                                <img src="ajuda.png" alt="" className="icone-ajuda"/>
                                <p className="text-button">Solicite ajuda</p>
                            </a>


                        </div>

                    </div>

                    <div className="">

                        
                    </div>

                    <div className="div-tabela px-5 py-4 mx-5 rounded">

                        
                    </div>
                    
                    
                </section>

            </div>

            

        </div>
    )
}