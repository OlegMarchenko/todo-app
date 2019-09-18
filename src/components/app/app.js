import React from 'react';

import HeaderApp from "../header-app";

import './app.css';
import TodoList from "../todo-list/todo-list";

const App = () => {
    return (
        <div className="todo-app">
            <HeaderApp/>
            <TodoList/>
        </div>
    );
};

export default App;
