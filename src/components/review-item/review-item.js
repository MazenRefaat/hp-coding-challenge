/* Dependences related to Review Item component */
import React, { Component } from 'react';

/* Review Item styles file import */
import './review-item.scss';

const ReviewItem = (props) => {
    /* Retrieve current review in the reviews map from parent component through props */
    const review = props.review;

    return(
        <div className="review-item">
            <div className="review-item__impression">
                <div className="review-item__impression-wrapper">
                    <span>
                        {
                            review.positive 
                            ?
                            '+'
                            : 
                            '-'
                        }
                    </span>
                </div>
            </div>

            <div className="review-item__content">
                <h3 className="review-item__name">
                    { review.name }
                </h3>

                <p className="review-item__review-text">
                { review.comment }
                </p>
            </div>
        </div>
    )
}


export default ReviewItem;

