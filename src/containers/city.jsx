import React, { Component } from 'react';
class City extends Component {
    render() {
        return (
            <div className="list-group-item">
                {this.props.city.name}
            </div>
        )
    }
}
export default City;