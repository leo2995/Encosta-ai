import React from 'react';

import {Link} from 'react-router-dom';
import AdminPortfolio from './AdminPortfolio'
import adminPublicParking from './AdminPublicParking'

const AdminMenu = props => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
                Selecione uma Opção
            </a>
            <Link to='/admin/portfolio' className="list-group-item list-group-item-action">Estacionamento Privado</Link>
            <Link to='/admin/adminPublicParking' className="list-group-item list-group-item-action">Estacionamento Publico</Link>

        </div>
    )
}

export default AdminMenu;