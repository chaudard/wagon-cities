import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from './city.jsx'
class CityList extends Component {
    static defaultProps = {
        cities: [
            { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" },
            { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' }
        ]
    }
    render() {
        return (
            <div className="cities">
                {this.props.cities.map((city) => <City city={city} key={city.slug}/>)}
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState) {
    return {
      cities: reduxState.cities
    };
}
  
export default connect(mapReduxStateToProps)(CityList);