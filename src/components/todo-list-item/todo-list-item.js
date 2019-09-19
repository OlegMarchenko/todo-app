import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const {label, important = false} = this.props;

        const style = {
            color: important ? 'tomato' : 'white'
        };

        return (
            <span
                className="todo-list-label"
                style={style}
                onClick={() => console.log(`Done: ${label}`)}>
                {label}
            </span>
        );
    }
};