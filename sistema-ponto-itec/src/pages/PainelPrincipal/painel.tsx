import * as React from 'react';
import "./styles.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export function Painel() {

    return (
        <div className="vh-100 justify-content-center align-items-center">
            <nav className="navbar navbar-dark background-azul">
                <div className="d-flex nav-container">
                    <a className="navbar-brand titulo-sistema" href="/painel-principal">Sistema Ponto</a>
                    <button className="btn d-flex flex-row div-perfil">
                        <div className="d-flex flex-column text-white div-nome-perfil"> 
                            <p className="texto-perfil">Analísta - nível 1</p> 
                            <p className="texto-perfil2">Nome Sobrenome</p>
                        </div>
                        <img src="usuario-azul.png" alt="" className="icone-perfil"/>
                    </button>
                </div>
            </nav>

            <div className="d-flex flex-row justify-content-between">

                <aside className="d-flex flex-column h-full justify-content-between">

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
                        {/* <div className="calendario-painel">
                            <FullCalendar
                                plugins={[ dayGridPlugin ]}
                                initialView="dayGridMonth"
                            />
                        </div> */}
                        
                    </div>

                    <div className="div-tabela px-5 py-4 mx-5 rounded">


                        <form className="d-flex pb-3">
                            <button className="btn btn-busca" type="submit">
                                <img src="lupa.png" alt="" className="icone-aviso"/>
                            </button>
                            <input className="form-control me-1 campo-busca" type="search" placeholder="Buscar" aria-label="Search"/>
                        </form>
                        

                        <table className="table tabela-horario">
                            <thead className="bg-primary text-white">
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
                            <tbody className='bg-white'>
                                <tr>
                                    <th scope="row">00/00/00</th>
                                    <td>08:02:35</td>
                                    <td>12:02:35</td>
                                    <td>13:05:01</td>
                                    <td>17:05:03</td>
                                    <td>00</td>
                                    <td>08:00</td>
                                </tr>

                                <tr>
                                    <th scope="row">00/00/00</th>
                                    <td>08:02:35</td>
                                    <td>12:02:35</td>
                                    <td>13:05:01</td>
                                    <td>17:05:03</td>
                                    <td>00</td>
                                    <td>08:00</td>
                                </tr>

                                <tr>
                                    <th scope="row">00/00/00</th>
                                    <td>08:02:35</td>
                                    <td>12:02:35</td>
                                    <td>13:05:01</td>
                                    <td>17:05:03</td>
                                    <td>00</td>
                                    <td>08:00</td>
                                </tr>

                                <tr>
                                    <th scope="row">00/00/00</th>
                                    <td>08:02:35</td>
                                    <td>12:02:35</td>
                                    <td>13:05:01</td>
                                    <td>17:05:03</td>
                                    <td>00</td>
                                    <td>08:00</td>
                                </tr>

                                <tr>
                                    <th scope="row">00/00/00</th>
                                    <td>08:02:35</td>
                                    <td>12:02:35</td>
                                    <td>13:05:01</td>
                                    <td>17:05:03</td>
                                    <td>00</td>
                                    <td>08:00</td>
                                </tr>
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example" className="bg-primary text-white">
                            <ul className="pagination d-flex justify-content-end align-items-center">
                                <li className="page-item ">
                                    <a className="page-link bg-primary text-white" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link bg-primary text-white" href="#">1</a></li>
                                <li className="page-item"><a className="page-link bg-primary text-white" href="#">2</a></li>
                                <li className="page-item"><a className="page-link bg-primary text-white" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link bg-primary text-white" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                                      
                </section>

            </div>

            

        </div>
    )
}