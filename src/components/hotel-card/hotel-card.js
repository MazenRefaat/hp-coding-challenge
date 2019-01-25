/* Dependences related to Hotel List component */
import React, { Component } from 'react';
import _ from 'lodash';

/* Hotel Card styles file import */
import './hotel-card.scss';

class HotelCard extends Component {

    /* formateDate is a function for formatting date specified in Hotels' API to  DD.MM.YYYY format */
    formatDate = ($date) => {
        let dateText = new Date($date).toLocaleDateString("en-GB");
        return dateText.replace(/\//g,'.');;
    }

    render(){
        /* Retrieve Hotel through props */
        const hotel = this.props.hotel;

        return(
            <div className="hp-app__hotel-card">
                <div className="card-img">
                    <img src={hotel.images[0]} alt={hotel.name} title={hotel.name}/>
                </div>
                
                <div className="card-info">
                    <div className="card-name-rate">
                        <h1>
                            <a href="">
                                {hotel.name}
                            </a>
                        </h1>

                        <div>
                            {
                                _.times(hotel.stars, i => <span key={i}>&#9733;</span>)
                            }
                            {
                                _.times(5-hotel.stars, i => <span key={i}>&#9734;</span>)
                            }
                        </div>
                    </div>
                    
                    <div className="card-country-city">
                        <p>
                            <span>
                                {hotel.city}
                            </span>
                            &nbsp;-&nbsp;  
                            <span>
                                {hotel.country}
                            </span>
                        </p>
                    </div>

                    <div className="card-description">
                        <p>
                            Hotel Description: {hotel.description}
                        </p>
                    </div>

                    <div className="card-reviews-price">
                        <div className="show-reviews">
                            <button>
                                Show Reviews 
                            </button>
                        </div>
                        
                        <div className="price-date">
                            <p className="price">
                                {hotel.price}  €
                            </p>

                            <p className="date">
                                {this.formatDate(hotel.date_start)}
                                &nbsp;-&nbsp;  
                                {this.formatDate(hotel.date_end)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelCard;