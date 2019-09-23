import React, {Component} from 'react';
import './header-app.css';

export default class HeaderApp extends Component {

    render() {

        const {todo, done} = this.props;

        return (
            <header className="header-app">
                <h1>ToDo List</h1>
                <p>{todo} more to do, {done} done</p>
            </header>
        );
    }
};