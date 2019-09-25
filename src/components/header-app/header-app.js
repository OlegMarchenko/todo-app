import React, {Component} from 'react';
import './header-app.css';

export default class HeaderApp extends Component {

    render() {
        return (
            <header className="header-app">
                <h1>ToDo List</h1>
                <p>3 more to do, 0 done</p>
            </header>
        );
    }
};