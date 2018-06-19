import React, { Component } from 'react';
import config from '../firebase-Config';


class AdminPublicParking extends Component {
    constructor(props) {
        super(props)
        this.gravaPublicParking = this.gravaPublicParking.bind(this)

    }

    gravaPublicParking() {
        const publicParking = {
            latitude1 :this.latitude1.value,
            latitude2 : this.latitude2.value,
            longitude1 : this.longitude1.value,
            longitude2 : this.longitude2.value,
            name : this.name.value,
            probability : this.probability.value,
            spaceQnt : this.spaceQnt.value
        }

        config.push('streetParking', {
            data: publicParking
        })
    }



    render() {

        return(
        <div style={{ padding: '120px' }}>
            <h2>Adicionar Estacionamento Publico</h2>
            <form onSubmit={this.gravaPublicParking}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="Nome" ref={(ref) => this.name = ref} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Vagas</label>
                    <input type="text" className="form-control" id="spaceQnt" placeholder="Vagas" ref={(ref) => this.spaceQnt = ref} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Longitude1</label>
                    <input type="text" className="form-control" id="longitude1" placeholder="Longitude1" ref={(ref) => this.longitude1 = ref} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Latitude1</label>
                    <input type="text" className="form-control" id="latitude1" placeholder="Latitude1" ref={(ref) => this.latitude1 = ref} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Longitude2</label>
                    <input type="text" className="form-control" id="longitude2" placeholder="Longitude2" ref={(ref) => this.longitude2 = ref} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Latitude2</label>
                    <input type="text" className="form-control" id="latitude2" placeholder="Latitude2" ref={(ref) => this.latitude2 = ref} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">VagasTotais</label>
                    <input type="text" className="form-control" id="probability" placeholder="Probabilidade de vaga" ref={(ref) => this.probability = ref} />
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
        )
    }



}

export default AdminPublicParking;