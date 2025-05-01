// This file initializes the Beggers Best website application and handles dynamic content.

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Willkommen bei Beggers Best!</h1>
                <p>Entdecken Sie den köstlichen, selbstgemachten Honig von Dirk Begger aus Schopfheim.</p>
                <p>Unser Honig wird mit Liebe und Sorgfalt hergestellt, um Ihnen das Beste aus der Natur zu bieten.</p>
                <button onClick={() => alert('Mehr Informationen folgen bald!')}>Erfahren Sie mehr</button>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));