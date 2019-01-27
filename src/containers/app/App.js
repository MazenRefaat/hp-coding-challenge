/* Dependences related to App container component */
import React, { Component } from 'react';
import Header from '../../components/header/header';
import HotelList from '../../components/hotel-list/hotel-list';
import { fetchHotels } from '../../services/api.service'

/* App styles file import */
import './App.scss';

class App extends Component {
    state = {
        hotels: [],
        fetchError: false,
        isLoading: false
    }

    /* getHotels function for Hotels' fetch & show */
    getHotels = () => {
        /*
            Show loading spinner until fetching done.
        */        
        this.setState({
            isLoading: true
        })

        fetchHotels().then((hotelsData)=>{
            /*
                - Update hotels state in case of success.
            */

            this.setState({
                fetchError: false,
                hotels: hotelsData,
                isLoading: false
            })
        }).catch(() => {
            /* 
                - Show Error Panel in case fetching issue.
            */
            this.setState({
                fetchError: true,
                isLoading: false
            })
        });
    }

    render(){
        return (
            /* App Main wrapper div */
            <div className='hp-app'>
                <Header />

                <main>
                    <div className="hp-app__load-hotels">
                        <button className="hp-app__load-hotels-btn"  onClick={this.getHotels}>Load Hotels</button>

                        {
                            this.state.isLoading 
                            &&  
                            <div>
                                <span className="loading">.</span>
                                <span className="loading">.</span>
                                <span className="loading">.</span>
                            </div>
                        }
                    </div>
                    {
                        !this.state.fetchError
                        ?
                            <HotelList hotels = { this.state.hotels }  />
                        :
                            <section className="hp-app__load-error">
                                    <span className="warning-label">
                                        !
                                    </span>
                                    An Error occurred
                            </section>
                    }
                </main>
            </div>
        );
    }
}

export default App;