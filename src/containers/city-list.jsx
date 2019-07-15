import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from './city.jsx'
class CityList extends Component {
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