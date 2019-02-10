import React, { Component } from 'react';

export default class Text extends Component {

    render() {
        return(
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.name}
                       value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} />
            </div>
        )
    }
}