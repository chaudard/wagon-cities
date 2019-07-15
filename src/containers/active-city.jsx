import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActiveCity extends Component {
    static defaultProps = {
        city: { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" }        
    }
    render() {
        const srcUrl = `https://www.lewagon.com/api/v1/cities/${this.props.city.slug}/cover?width=1200`;
        return (
            <div className="active-city">
                <img src={srcUrl}/>
                <div className="card-trip-infos">
                    <div>
                        <h2>{this.props.city.name}</h2>
                        <p>{this.props.city.address}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapReduxStateToProps(reduxState) {
    return {
      activeCity: reduxState.activeCity
    };
}

export default connect(mapReduxStateToProps)(ActiveCity);