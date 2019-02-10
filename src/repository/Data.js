import React, { Component } from 'react';

export default class Data extends Component {

    lista = [];

    load = () => {
        let that = this;
        fetch("http://127.0.0.1/lojareact/index.php/customer/load", {
            method: "POST"
        }).then((response) => response.json())
            .then((responseData) => {
                debugger;
                // that.setLista(responseData);
                that.lista = responseData;
            });

        debugger;
    };

    clearFields = () => {
        this.setState({nome: ""});
        this.setState({profissao: ""});
        this.setState({cpf: ""});
        this.setState({genero: "Masculino"});
    }

    setLista = (lista) => {
        this.lista = lista;
    }

    getLista = () => {
        debugger;
        return this.lista;
    }


}