import React, {Component} from 'react';

import './todo-list-item.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faMinusSquare} from "@fortawesome/free-solid-svg-icons";

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        })
    };

    onMarkImportant = () => {
        this.setState({
            important: true
        })
    };

    render() {
        const {label} = this.props;
        const {done, important} = this.state;

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
                    onClick={this.onLabelClick}>
                {label}
                </span>
                <div className="todo-list-nav">
                    <button>
                        <FontAwesomeIcon icon={faMinusSquare} className="todo-list-icon"/>
                    </button>
                    <button onClick={this.onMarkImportant}>
                        <FontAwesomeIcon icon={faExclamation} className="todo-list-icon"/>
                    </button>
                </div>
            </div>


        );
    }
};