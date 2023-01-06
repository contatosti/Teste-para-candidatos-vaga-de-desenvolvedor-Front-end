import * as React from 'react';
import "./styles.css";

export function Alterar() {

    return (
        <div className="d-flex vh-100 flex-column background-azul">
            

        <img src="logobg.png" alt="Logo no background" className="background-logo" />

        <div className="div-section" >

            <form action="/" method="get">

                <section className="d-flex flex-column container justify-content-center align-items-center" >

                    <h1 className="nome-orgao text-center">[NOME DO ORGÃO]</h1>

                    <p className="nome-gestor text-center">Alteração de senha</p>

                    <div className="div-input-icone input-group ">
                        <input className="input-usuario" type="password" placeholder="Nova senha" required/>
                        <img src="cadeado.png" alt="" className="icone"/>
                    </div>

                    <div className="div-input-icone-senha input-group ">
                        <input className="input-usuario" type="password" placeholder="Confirmação de senha" required/>
                        <img src="cadeado.png" alt="" className="icone"/>
                    </div>

                    <button className="btn btn-primary btn-entrar" type="submit">Alterar</button>

                </section>

            </form>
        </div> 

        <footer className="d-flex w-full align-items-center footer-content">

            <img src="ativo.png" alt="Logo e iso" />

            <p className="versao-text text-white">2022 - versão 1.0</p>

        </footer>
                                    
    </div>
    )
  
}