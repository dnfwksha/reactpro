import React, {Component} from 'react';
import './ExpenseItem.css';
import {FaPencilAlt} from "react-icons/fa";
import {MdOutlineDelete} from "react-icons/md";

export class ExpenseItem extends Component {
    render() {
        return (
            <li className='item'>
                <div className="info">
                    <span className="expense">{this.props.expense.charge}</span>
                    <span className="amount">{this.props.expense.amount}원</span>

                </div>
                <div>
                    <button className="edit-btn"><FaPencilAlt/></button>
                    <button className="clear-btn" onClick={() => this.props.handleDelete(this.props.expense.id)}>
                        <MdOutlineDelete/></button>
                </div>
            </li>
        );
    }
}

export default ExpenseItem;