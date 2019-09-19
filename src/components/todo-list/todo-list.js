import React from 'react';
import TodoListItem from "../todo-list-item";
import TodoListNav from "../todo-list-nav";

import './todo-list.css';

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="todo-list-item">
                <TodoListItem {...itemProps} />
                <TodoListNav/>
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;