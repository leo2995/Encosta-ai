import React, { Component } from 'react';
import config from '../firebase-Config';


class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(){

        const generalData={
            address: this.address.value,
            complement: this.complement.value
        }

        config.push('generalData',{
            data: generalData
        })
    }

    render() {
        return (
            <div style={{ padding: '120px' }}>
                <h2> Painel Administrativo</h2>
                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="address" placeholder="Endereco" ref={(ref)=> this.address= ref }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Descricao</label>
                        <textarea className="form-control" id="complement" rows="3" ref={(ref)=> this.complement= ref }></textarea >
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}


export default AdminPortfolio