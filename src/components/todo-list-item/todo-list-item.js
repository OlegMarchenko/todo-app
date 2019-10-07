import React from 'react';

import './todo-list-item.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faMinusSquare} from "@fortawesome/free-solid-svg-icons";


const TodoListItem = ({label, important, done, onToggleDone, onToggleImportant, onDeleted}) => {

    let classNames = 'todo-list-item';

    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }

    return (

        <div className={classNames}>
            <span className="todo-list-label"
                  onClick={onToggleDone}>
                {label}
            </span>
            <div className="todo-list-nav">
                <button
                onClick={onDeleted}>
                    <FontAwesomeIcon icon={faMinusSquare} className="todo-list-icon"/>
                </button>
                <button
                    onClick={onToggleImportant}
                >
                    <FontAwesomeIcon icon={faExclamation} className="todo-list-icon"/>
                </button>
            </div>
        </div>
    );

};

export default TodoListItem;