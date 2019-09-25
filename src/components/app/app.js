import React, {Component} from 'react';

import './app.css';

import HeaderApp from "../header-app";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Learn React & Redux', important: true, id: 2},
            {label: 'Have A Lunch', important: false, id: 3}
        ]
    };

    render() {

        const {todoData} = this.state;

        return (
            <div className="todo-app">
                <HeaderApp/>
                <div className="todo-app-top">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData}/>
                <ItemAddForm/>
            </div>
        );
    }
};