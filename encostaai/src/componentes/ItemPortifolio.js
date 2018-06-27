import React from 'react'

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='' width='400' height='300' />
                <h4>Estacionamento Privado</h4>
                <p> <label>Vagas Diponiveis:</label> <strong>{props.conteudo.enptySpots}</strong></p>
                <p><label>Avaliações:</label> <strong>{props.conteudo.rating}</strong></p>
                <p><strong>{props.conteudo.name}</strong></p>
                <p><label>Vagas Totais:</label> <strong>{props.conteudo.spaceQnt}</strong></p>
                <p><input type="button" value="Ocupar vaga" /></p>
                <p><input type="button" value="Desocupar vaga" /></p>

            </div>
        </div>
    )

}

export default ItemPortfolio