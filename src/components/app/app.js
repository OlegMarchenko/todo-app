import React from 'react';

import './app.css';

import HeaderApp from "../header-app";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel";

const App = () => {

    const todoData= [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn React With Redux', important: true, id: 2},
        {label: 'Have A Lunch', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <HeaderApp/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
