import React from 'react'

import {config, database} from '../firebase-Config'


const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='' width='400' height='300' />
                <h4>Estacionamento Privado</h4>
                <p> <label>Vagas Diponiveis:</label> <strong>{props.conteudo.emptySpots}</strong></p>
                <p><label>Avaliações:</label> <strong>{props.conteudo.rating}</strong></p>
                <p><strong>{props.conteudo.name}</strong></p>
                <p><label>Vagas Totais:</label> <strong>{props.conteudo.spaceQnt}</strong></p>

                <p><input type="button" value="Ocupar vaga" onClick={
                    function () {
                        var updates = ++props.conteudo.emptySpots
                        var result = {emptySpots:updates.toString()}
                        var chave = props.chave
                        return database.ref('privateParking').child(chave).update(result)
                    }
                }/></p>
                <p><input type="button" value="Desocupar vaga" onClick={
                    
                    function () {
                        var updates = --props.conteudo.emptySpots
                        var result = {emptySpots:updates.toString()}
                        var chave = props.chave
                        return database.ref('privateParking').child(chave).update(result)
                        
                    }
                }/></p>

            </div>
        </div>
    )

}

export default ItemPortfolio