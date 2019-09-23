import React, {Component} from 'react';

import './todo-list-item.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faMinusSquare} from "@fortawesome/free-solid-svg-icons";

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }


        return (
            <div className={classNames}>
                <span
                    className="todo-list-label"
                    onClick={onToggleDone}>
                {label}
                </span>
                <div className="todo-list-nav">
                    <button onClick={onDeleted}>
                        <FontAwesomeIcon icon={faMinusSquare} className="todo-list-icon"/>
                    </button>
                    <button onClick={onToggleImportant}>
                        <FontAwesomeIcon icon={faExclamation} className="todo-list-icon"/>
                    </button>
                </div>
            </div>


        );
    }
};