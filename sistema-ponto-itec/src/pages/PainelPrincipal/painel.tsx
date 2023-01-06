import * as React from 'react';
import "./styles.css";

export function Painel() {

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

                            <a type="button" href="/ponto-eletronico" className="btn btn-primary btn-painel d-flex justify-content-center align-items-center">
                                <img src="ponto.png" alt="" className="icone-ajuda"/>

                                <p className="text-button">Bata seu ponto aqui</p>
                            </a>

                        </div>

                    </div>

                    <div className="">

                        <div className="alert d-flex flex-column justify-content-center align-items-center caixa-aviso" role="alert">

                            <h4 className="alert-heading pt-2 titulo-aviso">Aviso!</h4>

                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img src="esquerda.png" alt="" className="icone-aviso"/>

                                <p className="texto-aviso">Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Manduma pindureta quium dia nois paga.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Cevadis im ampola pa arma uma pindureta.
                                Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Manduma pindureta quium dia nois paga.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Cevadis im ampola pa arma uma pindureta.</p>

                                <img src="direita.png" alt="" className="icone-aviso"/>
                            </div>


                        </div>

                        {/* calendario */}
                    </div>

                    <div className="div-tabela px-5 py-4 mx-5 rounded">

                        <form className="d-flex">
                            <button className="btn btn-busca" type="submit">
                                <img src="lupa.png" alt="" className="icone-aviso"/>
                            </button>
                            <input className="form-control me-1" type="search" placeholder="Buscar" aria-label="Search"/>
                        </form>
                        

                        <table className="table ">
                            <thead>
                                <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Entrada</th>
                                <th scope="col">Intervalo</th>
                                <th scope="col">Retorno</th>
                                <th scope="col">Saída</th>
                                <th scope="col">Horas extra</th>
                                <th scope="col">Horas totais</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">00/00/00</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">00/00/00</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">00/00/00</th>
                                <td>Jacob</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>

                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                <a className="page-link" href="#" aria-disabled="true">Anterior</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#">Próximo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    
                </section>

            </div>

            

        </div>
    )
}