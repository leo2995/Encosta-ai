import React, { Component } from 'react';
import config from './../firebase-Config'
import ItemPortfolio from './ItemPortifolio';
import StreetParking from './StreetParking';


class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            privateParking: [],
            streetParking: []

        }

        config.syncState('privateParking', {
            context: this,
            state: 'privateParking',
            asArray: false
        })

        config.syncState('streetParking', {
            context: this,
            state: 'streetParking',
            asArray: false
        })

    }

    render() {

        return (

            <div>
                {/* Container (Portfolio Section) */}
                < div id='portfolio' className='container-fluid text-center bg-grey' >
                    <h2>Estacionamentos</h2> <br />
                    <div className='row text-center '>

                        {
                            Object.keys(this.state.privateParking)
                                .map(key => {
                                    return <ItemPortfolio key={key} conteudo={this.state.privateParking[key]} />
                                })
                        }


                    </div> <br />

                    <h2>Estacionamentos Publicos</h2> <br />

                    <div>
                        {
                            Object.keys(this.state.streetParking)
                                .map(key => {
                                    return <StreetParking key={key} conteudoPublico={this.state.streetParking[key]} />
                                })
                        }

                    </div>


                </div >

            </div>
        )
    }

}


export default Portfolio;