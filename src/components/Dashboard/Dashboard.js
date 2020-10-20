import React from 'react';
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <div className = "dashboard-container">
                <Navigation />
                <SearchBar />
            </div>
        </div>
    )
}

export default Dashboard;