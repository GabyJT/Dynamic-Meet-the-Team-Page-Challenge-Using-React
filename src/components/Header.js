import React from 'react';
import './Header.css';

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    );
};

const SubHeader = ({ subtitle }) => {
    return (
        <h2>{subtitle}</h2>
    );
};

export { Header, SubHeader };
