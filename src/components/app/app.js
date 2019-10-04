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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React & Redux'),
            this.createTodoItem('Have A Lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

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
        const newItem = this.createTodoItem(text);

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

    onToggleDone = (id) => {
        console.log(`Toggle Done: ${id}`);
    };

    onToggleImportant = (id) => {
        console.log(`Toggle Important: ${id}`);

    };

    render() {

        const {todoData} = this.state;

        return (
            <div className="todo-app">
                <HeaderApp todo={1} done={3}/>
                <div className="todo-app-top">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};