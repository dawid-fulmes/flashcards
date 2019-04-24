import React from 'react';

const Header = ({ switchLearnMode, switchEditMode }) => {
    return (
        <header>
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