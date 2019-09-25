import React, {Component} from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {
    render() {
        return (
            <div className="search-panel">
                <input type="text"
                       className="search-panel-input"
                       placeholder="search..."/>
            </div>
        );
    }
};