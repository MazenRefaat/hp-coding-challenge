/* fetchHotels function for Hotels' fetch & show */
export function fetchHotels() {
    /* 
        - Fetch hotels through API.
        - Applying '?count=5' parameter in API call for retrieving only 5 Hotels.
    */

    return fetch('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
        .then(response => {
            /* 
                 - Check response status for the API fetch.
                 - Throw exception in case of any error.
                 - Show Error Panel.
            */
            if (!response.ok) {
                throw Error("Error Retrieving Hotels");
            }
            return response.json();
        });
}

/* fetchReviews function for Reviews' fetch & show */
export function fetchReviews(id) {
    /* 
        - Fetch Reviews through API with hotel id as (id) parameter.
    */

    return fetch('http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=' + id)
        .then(response => response.json());
}