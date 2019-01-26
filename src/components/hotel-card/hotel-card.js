/* Dependences related to Hotel Card component */
import React, { Component } from 'react';
import _ from 'lodash';

import ReviewList from '../review-list/review-list'

/* Hotel Card styles file import */
import './hotel-card.scss';

class HotelCard extends Component {
    state = {
        reviews: [],
        showReviews: false,
        isLoading: false
    }

    /* formateDate is a function for formatting date specified in Hotels' API to  DD.MM.YYYY format */
    formatDate = ($date) => {
        let dateText = new Date($date).toLocaleDateString("en-GB");
        return dateText.replace(/\//g,'.');;
    }

    /* getReviews function for Reviews' fetch & show */

    getReviews = () => {
        const hotel = this.props.hotel;
        
        /* 
            Conditional Fetch here in case we assume we won't fetch already fetched comments.
        */
        
        if(this.state.reviews.length == 0){
            this.setState({
                isLoading: true
            });

            fetch('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id='+ hotel.id)
            .then(response => response.json())
            .then(reviewsData => this.setState({
                reviews: reviewsData,
                isLoading: false
            }));
        }

        this.setState({
            showReviews: !this.state.showReviews
        })
    }

    render(){
        /* Retrieve Hotel through props */
        const hotel = this.props.hotel;

        return(
            <div className="hp-app__hotel-card">
                <div className="card-container">
                    <div className="card-img">
                        <img src={hotel.images[0]} alt={hotel.name} title={hotel.name}/>
                    </div>
                    
                    <div className="card-info">
                        <div className="card-name-rate">
                            <h1 className="name">
                                <a href="">
                                    { hotel.name }
                                </a>
                            </h1>

                            <div className="rate">
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
                                    { hotel.city }
                                </span>
                                &nbsp;-&nbsp;  
                                <span>
                                    { hotel.country }
                                </span>
                            </p>
                        </div>

                        <div className="card-description">
                            <p>
                                <b>Hotel Description: </b> 
                                { hotel.description }
                            </p>
                        </div>

                        <div className="card-reviews-price">
                            <div className="show-reviews">
                                <button onClick={ this.getReviews }>
                                    {
                                        this.state.showReviews
                                        ?
                                        'Hide '
                                        :
                                        'Show '
                                    }
                                    Reviews 
                                </button>

                                {
                                    this.state.isLoading &&  <span className="spinner">&#8634;</span>
                                }
                                
                            </div>
                            
                            <div className="price-date">
                                <p className="price">
                                    { hotel.price }  €
                                </p>

                                <p className="date">
                                    { this.formatDate(hotel.date_start) }
                                    &nbsp;-&nbsp;  
                                    { this.formatDate(hotel.date_end) }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.showReviews && <ReviewList reviews = { this.state.reviews } />                    
                }
                
            </div>
        )
    }
}

export default HotelCard;