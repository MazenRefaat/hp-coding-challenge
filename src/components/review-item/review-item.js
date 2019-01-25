/* Dependences related to Review Item component */
import React, { Component } from 'react';

/* Review Item styles file import */
import './review-item.scss';

class ReviewItem extends Component {
    render() {
        /* Retrieve current review in the reviews map from parent component through props */
        const review = this.props.review;

        return(
            <div className="review-item">
                <div className="impression">
                    <div>
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

                <div className="content">
                    <h3 className="name">
                        { review.name }
                    </h3>

                    <p className="review-text">
                    { review.comment }
                    </p>
                </div>
            </div>
        )
    }
}

export default ReviewItem;

