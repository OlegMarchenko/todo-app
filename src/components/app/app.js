import React, {Component} from 'react';

import './app.css';

import HeaderApp from "../header-app";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, done: false, id: 1},
            {label: 'Learn React & Redux', important: true, done: false, id: 2},
            {label: 'Have A Lunch', important: false, done: false, id: 3}
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
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        };

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem,
            ];
            return {
                todoData: newArr
            }
        })
    };


    render() {

        const {todoData} = this.state;

        return (
            <div className="todo-app">
                <HeaderApp todo={1} done={3} />
                <div className="todo-app-top">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};