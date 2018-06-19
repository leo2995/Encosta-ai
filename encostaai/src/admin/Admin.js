import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from './../firebase-Config'
import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'
import AdminPublicParking from './AdminPublicParking'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render() {

        if (this.state.estaLogando) {
            return (
                <div className="container">
                    <p>aguarde...</p>
                </div>
            )
        }

        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />


        }

        return (
            <div className="container">

                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                <Route path={`${this.props.match.url}/adminPublicParking`} component={AdminPublicParking} />


            </div>
        )
    }
}

export default Admin