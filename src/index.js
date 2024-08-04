import React from 'react';
import ReactDOM from 'react-dom';
import App from './WeatherApp/App'; // Use './' to indicate a relative path from the current directory

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
