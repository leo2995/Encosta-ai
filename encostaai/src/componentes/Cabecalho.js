import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center'>
                <h1>EncostaAí</h1>
                <p>Seu Carro Bem Estacionado</p>

            </div>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>Sobre</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INICIO</Link></li>
                            <li><Link to='/login'>LOGIN</Link></li>
                            <li><Link to='/portfolio'>ESTACIONAMENTOS</Link></li>
                            <li><Link to='/precos'>PRECOS</Link></li>
                            <li><Link to='/contato'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho;