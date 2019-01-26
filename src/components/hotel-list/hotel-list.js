/* Dependences related to Hotel List component */
import React, { Component } from 'react';
import HotelCard from '../hotel-card/hotel-card';

/* Hotel List styles file import */
import './hotel-list.scss';

const HotelList = (props) => {
        /* 
            - Retrieve Hotels' data from parent component through props.
            - Map retrieved Hotels' data to Hotel Cards to be shown in the list.
        */
       const hotelList = props.hotels.map (
        (hotel, i) => {
            return ( 
                <HotelCard hotel ={ hotel } key={ i } />
            );
        }
    )
    return(
        <section className="hp-app__hotel-list">
            { hotelList }
        </section>
    )
}

export default HotelList;