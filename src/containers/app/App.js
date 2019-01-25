/* Dependences related to App container component */
import React, { Component } from 'react';
import Header from '../../components/header/header';
import HotelList from '../../components/hotel-list/hotel-list';

/* App styles file import */
import './App.scss';

class App extends Component {
    state = {
        hotels: []
    }

    loadHotels= () => {
        /* 
            - Fetch hotels through API.
            - Applying '?count=5' parameter in API call for retrieving only 5 Hotels.
        */

        fetch('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
        .then(response => {
            /* 
                - Check response status for the API fetch.
                - Throw exception in case of any error.
                - Show Error Panel.
            */
            if(!response.ok){
                throw Error("Error Retrieving Hotels");
            }

            /*
                - Update hotels state in case of success.
             */
            response.json()
            .then(hotelsData => this.setState({
                hotels: hotelsData
            }));
            
        });
        
    }

    render(){
        console.log(this.state.hotels);
        return (
            /* App Main wrapper div */
            <div className='hp-app__container'>
                <Header />

                <main>
                    <button className="loadHotels" onClick={this.loadHotels}>Load Hotels</button>

                    <HotelList hotels = { this.state.hotels }  />
                </main>
            </div>
        );
    }
}

export default App;