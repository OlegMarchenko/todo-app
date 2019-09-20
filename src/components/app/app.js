import React, {Component} from 'react';

import './app.css';

import HeaderApp from "../header-app";
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Learn React With Redux', important: true, id: 2},
            {label: 'Have A Lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }

        });
    };

    addItem = (text) => {
        // generate id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        // add element in array
        this.setState(({todoData}) => {

            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }

        });

    };

    render() {
        return (
            <div className="todo-app">
                <HeaderApp/>
                <SearchPanel/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>
                    <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};

