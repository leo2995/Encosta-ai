import React from 'react';
import {Link} from 'react-router-dom';


const Rodape = props => {
    return (
        <div>
            <footer className='text-center'>
                <Link to='/' title='Inicio'>
                    <span className='glyphicon glyphicon-chevron-up'></span>
                </Link>
                <p>Encosta ai Todos os Direitos reservados <Link to='www.encostaai.com.br'
                                                                 title='Nossa Página'>www.encostaai.com.br</Link></p>
            </footer>
        </div>
    )

}

export default Rodape;