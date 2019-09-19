import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation } from '@fortawesome/free-solid-svg-icons';



import './todo-list-nav.css';

const TodoListNav = () => {
    return (
        <div className="todo-list-nav">
            <button><FontAwesomeIcon icon={faTrash} className="todo-list-icon"/></button>
            <button><FontAwesomeIcon icon={faExclamation} className="todo-list-icon"/></button>
        </div>
    );
};

export default TodoListNav;

