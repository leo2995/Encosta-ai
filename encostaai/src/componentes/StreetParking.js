import React from 'react'

const StreetParkink = props=>{
    return(
        <div className='col-sm-4'>
        <div className='thumbnail'>
            <img src='paris.jpg' alt='' width='400' height='300' />
            <h4>Estacionamentos Público</h4>
            <p><label>Chance de vagas Diponiveis:</label>
                <strong>{props.conteudoPublico.probability}</strong><label>%</label></p>
            <p><label>Avaliações:</label> <strong>{props.conteudoPublico.rating}</strong></p>
            <p><strong>{props.conteudoPublico.name}</strong></p>
            <p><label>Vagas Totais:</label> <strong>{props.conteudoPublico.spaceQnt}</strong></p>

        </div>
    </div>

    )
}

export default StreetParkink;