// src/components/navigation/SideBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';

const SideBar = () => {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/activity')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities', error);
            });
    }, []);

    const setPage = (pageName) => {
        setSelected(pageName);
        switch (pageName) {
            case 'Home':
                navigate('/home');
                break;
            case 'Favorites':
                navigate('/favorites');
                break;
            case 'Watch Later':
                navigate('/watchlater');
                break;
            default:
                break;
        }
    };

    return (
        <nav>
            <ul className="navigation-ul">
                <li onClick={() => setPage('Home')}>Home</li>
                <li onClick={() => setPage('Favorites')}>Favorites</li>
                <li onClick={() => setPage('Watch Later')}>Watch Later</li>
            </ul>
            {showActivities && (
                <ul className="activity-ul">
                    {activities.slice(0, 10).map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default SideBar;
