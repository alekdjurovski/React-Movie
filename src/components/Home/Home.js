import React, { Component } from 'react'
import './Home.css'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import Spinner from '../elements/Spinner/Spinner'
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn'

export class Home extends Component {
    render() {
        return (
            <div className="rmdb-home">
                <HeroImage />
                <SearchBar />
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />
            </div>
        )
    }
}

export default Home
