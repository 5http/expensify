import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container content-container--last">
        <div className="list-header">
            <div className="show-on-mobile">Expenses</div>
            <div className="show-on-desktop">Expense</div>
            <div className="show-on-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <p>No expenses</p>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem {...expense} key={expense.id} />
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);