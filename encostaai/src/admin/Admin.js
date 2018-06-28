import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { auth, database } from './../firebase-Config';
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';
import AdminPublicParking from './AdminPublicParking';
import config from './../firebase-Config'

const data = [
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null,
            privateParking: {},
            streetParking: {},
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        });

        database.ref('/privateParking/').once('value', (snapshot) => {
            const childs = snapshot.map(function (childSnapshot) {
                const childData = childSnapshot.val();
                return childData;
            });

            this.setState({ privateParking: childs });
        });
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
            <div className="container" >
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                <Route path={`${this.props.match.url}/adminPublicParking`} component={AdminPublicParking} />

                {/* <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Rating" fill="#8884d8" />
                </BarChart> */}
            </div>
        )
    }
}

export default Admin