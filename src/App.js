import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

const App = () => {
    const teamMembers = [
        { id: 1, name: 'Harry Potter', role: 'Auror', photo: process.env.PUBLIC_URL + '/images/harry.jpg' },
        { id: 2, name: 'Hermione Granger', role: 'Minister for Magic', photo: process.env.PUBLIC_URL + '/images/hermione.jpg' },
        { id: 3, name: 'Ron Weasley', role: 'Auror', photo: process.env.PUBLIC_URL + '/images/ron.jpg' },
        { id: 4, name: 'Albus Dumbledore', role: 'Headmaster', photo: process.env.PUBLIC_URL + '/images/dumbledore.jpg' },
        { id: 5, name: 'Severus Snape', role: 'Potions Master', photo: process.env.PUBLIC_URL + '/images/snape.jpg' },
    ];

    return (
        <div className="App">
            <Header title="Meet the Team" />
            <Gallery teamMembers={teamMembers} />
        </div>
    );
};

export default App;
