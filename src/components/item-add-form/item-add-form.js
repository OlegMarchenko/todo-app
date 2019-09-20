import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {

        return (
            <div className="item-add-form">
                <button
                onClick={() => this.props.onItemAdded('hello')}>
                    Add Item
                </button>
            </div>
        );
    }
}