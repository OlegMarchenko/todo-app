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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React With Redux'),
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    render() {

        const {todoData} = this.state;

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <HeaderApp todo={todoCount} done={doneCount}/>
                <SearchPanel/>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};

