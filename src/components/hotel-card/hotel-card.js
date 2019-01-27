/* Dependences related to Hotel Card component */
import React, { Component } from 'react';
import _ from 'lodash';

import ReviewList from '../review-list/review-list';

import { fetchReviews } from '../../services/api.service';

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

            fetchReviews(hotel.id).then(reviewsData => {
                this.setState({
                    reviews: reviewsData,
                    isLoading: false
                })
            });
        }

        this.setState({
            showReviews: !this.state.showReviews
        })
    }

    render(){
        /* Retrieve Hotel through props */
        const hotel = this.props.hotel;

        return(
            <div className="hp-card-container">
                <div className="hp-card">
                    <div className="hp-card__img-wrapper">
                        <img className="hp-card__img" src={hotel.images[0]} alt={hotel.name} title={hotel.name}/>
                    </div>
                    
                    <div className="hp-card__info">
                        <div className="hp-card__name-rate">
                            <a className="hp-card__name" href="">
                                { hotel.name }
                            </a>

                            <div>
                                {
                                    _.times(hotel.stars, i => <span className="hp-card__rate" key={i}>&#9733;</span>)
                                }
                                {
                                    _.times(5-hotel.stars, i => <span className="hp-card__rate" key={i}>&#9734;</span>)
                                }
                            </div>
                        </div>
                        
                        <div className="hp-card__country-city">
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

                        <div>
                            <p className="hp-card__description">
                                <b>Hotel Description: </b> 
                                { hotel.description }
                            </p>
                        </div>

                        <div className="hp-card__reviews-price">
                            <div className="hp-card__show-reviews">
                                <button className="hp-card__show-reviews-btn" onClick={ this.getReviews }>
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
                            
                            <div className="hp-card__price-date">
                                <p className="hp-card__price">
                                    { hotel.price }  €
                                </p>

                                <p className="hp-card__date">
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