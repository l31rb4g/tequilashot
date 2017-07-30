import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dribbble from './Dribbble'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('fetches jsonp', () => {
    let d = new Dribbble();
    d.load((json) => {
        
    });
});