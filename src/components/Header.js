import React from 'react';
import '../style/Header.scss'

const Header = ({ switchLearnMode, switchEditMode, appMode }) => {
    return (
        <header className="main">
            <h1>Flashcard</h1>
            <nav>
                <ul>
                    <li onClick={switchLearnMode} className={appMode === "LEARN_MODE" ? "active" : null}>Learn</li>
                    <li onClick={switchEditMode} className={appMode === "EDIT_MODE" ? "active" : null}>Edit Deck</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;