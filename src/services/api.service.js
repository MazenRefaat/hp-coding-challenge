import 'core-js/fn/promise';

import axios from 'axios';

/* fetchHotels function for Hotels' fetch & show */
export function fetchHotels() {
    /* 
        - Fetch hotels through API.
        - Applying '?count=5' parameter in API call for retrieving only 5 Hotels.
    */

    return axios('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
        .then(response => {
            /* 
                 - Check response status for the API fetch.
                 - Throw exception in case of any error.
                 - Show Error Panel.
            */
            return response.data;
        }).catch(error => {
            throw Error(error);
        });
}

/* fetchReviews function for Reviews' fetch & show */
export function fetchReviews(id) {
    /* 
        - Fetch Reviews through API with hotel id as (id) parameter.
    */

    return axios('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=' + id)
        .then(response => response.data);
}