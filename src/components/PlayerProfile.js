import React from 'react'
import { useParams } from 'react-router'
import './PlayerProfile.css'
import playerData from "../data.json"
import { FaArrowLeft, FaQuestion } from 'react-icons/fa';
import { RatingView } from 'react-simple-star-rating'
import ApexChart from './chart.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export const PlayerProfile = () => {
    const { Name, id } = useParams()
    let selectedPlayer = playerData[id - 1];
    return (
        <div className="profile-page">
            <div className="header">
                <Link to={`/`}>
                    <button className="btn btn-home"><FaArrowLeft className="btn-icon" /> Home</button>
                </Link>
                <button className="btn btn-help"> <FaQuestion className="btn-icon" /> Help</button>
                <p className="name-header">{selectedPlayer.Name}</p>   
            </div>

            <div className="flex-container">
                <div className="flex-item col-1">
                    <ApexChart />
                    <div className = "progress-box">
                    <p>Finishing  <progress  value={selectedPlayer.Finishing} max="100">  </progress></p>
                    <p>Crossing  <progress  value={selectedPlayer.Crossing} max="100"> </progress></p>
                    <p>HeadingAccuracy  <progress  value={selectedPlayer.HeadingAccuracy} max="100"> </progress></p>
                    <p>ShortPassing  <progress  value={selectedPlayer.ShortPassing} max="100"> </progress></p>
                    <p>Volleys  <progress  value={selectedPlayer.Volleys} max="100">  </progress></p>
                    </div>
                </div>
                <div className="flex-item col-2">
                    <div className="over-div">
                        <span className="border-sp">Overall{playerData[id - 1].Overall}</span>
                        <span className="border-sp">Potential80</span>
                    </div>
                    <div >
                        <p> Age <strong>{selectedPlayer.Age}</strong></p>
                        <p> Nationality <strong>{selectedPlayer.Nationality}</strong></p>
                        <p>Height <strong>{selectedPlayer.Height} - {(parseInt(selectedPlayer.Height) *0.3048).toFixed(2)}m </strong></p>
                        <p>Weight <strong>{selectedPlayer.Weight} - {parseInt(parseInt(selectedPlayer.Weight) * 0.45359237)}Kg</strong></p>
                        <p>Wage <strong>{selectedPlayer.Wage} </strong></p>
                        <p>Value <strong>{selectedPlayer.Value} </strong></p>
                        <p>Prefered Foot <strong>{selectedPlayer['Preferred Foot']}</strong></p>
                        <p>Position <strong>{selectedPlayer.Position}</strong></p>
                        <p>Jersey Number <strong>{selectedPlayer['Jersey Number']}</strong></p>
                        <p>Weak Foot <span><RatingView ratingValue={4} stars={4} /></span></p>
                        <p>Skill Moves <span><RatingView ratingValue={5} stars={5} /></span></p>
                        <p>Work Rate (Attack - Deffense) <strong>{selectedPlayer['Work Rate']}</strong></p>
                        <p>International Reputation <span><RatingView ratingValue={4} stars={4} /></span></p>
                        <p>Club  <strong>{selectedPlayer.Club}</strong> - Joind :<strong>{selectedPlayer.Joined}</strong></p>
                        <p>Contract Valid Until <strong>{selectedPlayer['Contract Valid Until']}</strong></p>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}
