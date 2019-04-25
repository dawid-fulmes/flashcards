import React from 'react';
import '../style/Header.scss'

const Header = ({ switchLearnMode, switchEditMode }) => {
    return (
        <header className="main">
            <h1>Flashcard</h1>
            <nav>
                <ul>
                    <li onClick={switchLearnMode}>Learn</li>
                    <li onClick={switchEditMode}>Edit Deck</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;