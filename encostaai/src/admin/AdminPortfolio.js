import React, {Component} from 'react';
import config from '../firebase-Config';


class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.gravaPortfolio = this.gravaPortfolio.bind(this)


    }

    gravaPortfolio() {

        const dataParking = {
            emptySpots: this.emptySpots.value,
            latitude: this.latitude.value,
            longitude: this.longitude.value,
            name: this.name.value,
            spaceQnt: this.spaceQnt.value
        }
        //console.log(streetParking)

        config.push('privateParking', {
            data: dataParking

        })

    }

    render() {
        return (
            <div style={{ padding: '120px' }}>
                <h2>Adicionar Estacionamento Privado</h2>
                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nome</label>
                        <input type="text" className="form-control" id="name" placeholder="Nome" ref={(ref) => this.name = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vagas</label>
                        <input type="text" className="form-control" id="emptySpots" placeholder="Vagas"
                               ref={(ref) => this.emptySpots = ref}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Longitude</label>
                        <input type="text" className="form-control" id="longitude" placeholder="Longitude" ref={(ref) => this.longitude = ref} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Latitude</label>
                        <input type="text" className="form-control" id="latitude" placeholder="Latitude" ref={(ref) => this.latitude = ref} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">VagasTotais</label>
                        <input type="text" className="form-control" id="spaceQnt" placeholder="VagasTotais" ref={(ref) => this.spaceQnt = ref} />
                    </div>

                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}


export default AdminPortfolio