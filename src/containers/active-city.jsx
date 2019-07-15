import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActiveCity extends Component {
    render() {
        if (!this.props.activeCity) {
            return (
              <div className="active-city">
                <p>Select a city...</p>
              </div>
            );
          }
        
        const srcUrl = `https://www.lewagon.com/api/v1/cities/${this.props.activeCity.slug}/cover?width=1200`;

        return (
            <div className="active-city">
                <img src={srcUrl}/>
                <div className="card-trip-infos">
                    <div>
                        <h2>{this.props.activeCity.name}</h2>
                        <p>{this.props.activeCity.address}</p>
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