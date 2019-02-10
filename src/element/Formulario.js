import React, { Component } from 'react';
import Text from '../component/Text';
import Button from '../component/Button';
import Message from '../component/Message';
import Table from "./Table";

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            numero : "",
            descricao : "",
            message : "",
            lista: []
        };
    }

    componentWillMount() {
        this.load();
    }

    load = () => {

        fetch("http://localhost/condominio/index.php/bloco/find")
            .then(response => response.json())
            .then(responseData => {

                this.setState({
                    lista: responseData
                });

            });
    }

    clearFields = () => {
        this.setState({id: ""});
        this.setState({numero: ""});
        this.setState({descricao: ""});
    }

    setId = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    setNumero = (e) => {
        this.setState({
            numero: e.target.value
        });
    }

    setDescricao = (e) => {
        this.setState({
            descricao: e.target.value
        });
    }


    edit = (customer) => {

        this.setState({
            id: customer.id,
            numero: customer.numero,
            descricao: customer.descricao
        });
    }

    addCustomer = () => {

        let params = this.state;
        let url = "http://localhost/condominio/index.php/bloco/inserir";

        if (params.id !== "")
            url = "http://localhost/condominio/index.php/bloco/alterar";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(params)
        }).then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    message: responseData.message
                });

                this.load();
                this.clearFields();

            });
    }

    render() {

        return (
            <div>
                <form method="POST">
                    <input type="hidden" name="id" value={this.state.id} onChange={this.setId} />
                    <Text id="numero" type="text" name="numero" label="Número: " value={this.state.numero} onChange={this.setNumero} />
                    <Text id="descricao" type="text" name="descricao" label="Descrição: " value={this.state.descricao} onChange={this.setDescricao} />
                    <Button type="button" onClick={this.addCustomer} label="Salvar" />
                </form>

                <div>
                    <Message message={this.state.message} />
                </div>

                <Table lista={this.state.lista} functionLoad={this.load.bind(this)} functionEditOnclick={this.edit.bind(this)} />

            </div>
        )
    }
}

export default Formulario;