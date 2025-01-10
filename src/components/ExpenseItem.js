import React, {Component} from 'react';
import './ExpenseItem.css';
import {FaPencilAlt} from "react-icons/fa";
import {MdOutlineDelete} from "react-icons/md";

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
    return (
        <li className='item'>
            <div className="info">
                <span className="expense">{expense.charge}</span>
                <span className="amount">{expense.amount}원</span>

            </div>
            <div>
                <button className="edit-btn"
                        onClick={() => handleEdit(expense.id)}><FaPencilAlt/></button>
                <button className="clear-btn"
                        onClick={() => handleDelete(expense.id)}>
                    <MdOutlineDelete/></button>
            </div>
        </li>
    )
}

export default ExpenseItem;