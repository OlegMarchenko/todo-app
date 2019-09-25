import React, {Component} from 'react';

import './todo-list-item.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faMinusSquare} from "@fortawesome/free-solid-svg-icons";


export default class TodoListItem extends Component {

    render() {

        return (
            <div className="todo-list-item">
                <span className="todo-list-label">Drink Coffee</span>
                <div className="todo-list-nav">
                    <button>
                        <FontAwesomeIcon icon={faMinusSquare} className="todo-list-icon"/>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faExclamation} className="todo-list-icon"/>
                    </button>
                </div>
            </div>
        );
    }
};