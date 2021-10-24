
import './SearchBar.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './images/logo.png'


export const SearchBar = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [textenterd, settextenterd] = useState("");

    const filterData = (event) => {
        const searchText = event.target.value.toLowerCase();
        settextenterd(searchText);
        const newFilter = data.filter((player) => {
            const playerName = player.Name.toLowerCase();
            const playerNationality = player.Nationality.toLowerCase();
            const playerPosition = player.Position.toLowerCase();
            const playerAge = player.Age.toString();
            const preferredFoot = player['Preferred Foot'].toLowerCase();
            if (playerNationality.includes(searchText) ||
                playerName.includes(searchText) ||
                playerAge.includes(searchText) ||
                playerPosition.includes(searchText) ||
                preferredFoot.includes(searchText)) {
                return player;
            }
        });

        if (searchText === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <div className="search-page">
            <div className="search-container">
                <img src={logo} width='400' height='200' />
                <div className="search-box">
                   
                    <input className="search-input" type='text' placeholder=" Search for player" onChange={filterData} />
                    {
                        filteredData.length != 0 && (


                            <div className="search-result">
                                {filteredData.map((value, key) => {
                                    return (
                                        <Link to={`/playerprofile/${value.Name}/${value.id}`}>
                                            <p className="player-data-item" key={value.id} >{value.Name}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
