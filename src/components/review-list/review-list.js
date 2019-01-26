/* Dependences related to Reviews' List component */
import React, { Component } from 'react';

import ReviewItem from '../review-item/review-item'

/* Reviews' List styles file import */
import './review-list.scss';

const ReviewList = (props) => {
    /* 
        - Retrieve Reviews' data from parent component through props.
        - Map retrieved Reviews' data to Review Items to be shown in the list.
    */

    const reviewList = props.reviews.map (
        (review, i) => {
            return ( 
                <ReviewItem review = { review } key={ i } />
            );
        }
    )
    return(
        <section className="hp-app__review-list">
            { reviewList }
        </section>
    )
}

export default ReviewList;