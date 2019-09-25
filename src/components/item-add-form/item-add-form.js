import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {

        return (
            <form className="item-add-form">
                <input type="text"
                       placeholder="ToDo name"/>
                <button>Add Item</button>
            </form>
        );
    }
}