import React, {Component} from 'react';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: []
        };
    }

    editCustomer = (customer) => {
        this.props.functionEditOnclick(customer);
    }

    removeCustomer = (customerId) => {
        let self = this;
        let params = {
            "id": customerId
        };

        fetch("http://localhost/condominio/index.php/bloco/delete", {
            method: "POST",
            body: JSON.stringify(params)
        }).then((response) => response.json())
            .then((responseData) => {
                self.props.functionLoad();
            });
    }


	render() {
		return (
			<div>
                <table>
                    <thead>
                    <tr>
                        <td>Código</td>
                        <td>Numero</td>
                        <td>Descricao</td>
                        <td>Editar</td>
                        <td>Excluir</td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.lista.map(function(customer) {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.numero}</td>
                                    <td>{customer.descricao}</td>
                                    <td>
                                        <button type="button" onClick={this.editCustomer.bind(this, customer)}>Editar</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={this.removeCustomer.bind(this, customer.id)}>Excluir</button>
                                    </td>
                                </tr>
                            )
                        }.bind(this))
                    }
                    </tbody>

                </table>
            </div>
		)
	}
}

export default Table;