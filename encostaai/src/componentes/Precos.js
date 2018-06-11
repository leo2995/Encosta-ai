import React from 'react';

const Precos = props => {
    return (

        < div id='pricing' className='container-fluid' >
            <div className='text-center'>
                <h2>Preços</h2>
                <h4>Escolha o melhor estacionamento pra você</h4>
            </div>
            <div className='row '>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Privado</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>$5</strong> Até 1H</p>
                            <p><strong>$10</strong> Até 4H</p>
                            <p><strong>$20</strong> Diária</p>
                            <p><strong>$70</strong> Semanal</p>
                        </div>
                        <div className='panel-footer'>
                            <h3>$200</h3>
                            <h4>Mensal</h4>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Zona Azul</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>$5</strong> Folha</p>
                            <p><strong>$30</strong> Talão</p>
                        </div>
                        <div className='panel-footer'>
                            <h3></h3>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Livre</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>10 vagas </strong>Por rua</p>
                        </div>
                        <div className='panel-footer'>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Precos;