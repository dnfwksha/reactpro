import React, {useState} from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {


    const [charge, setCharge] = useState("");
    const [id, setId] = useState("");
    const [amount, setAmount] = useState(0);
    const [alert, setAlert] = useState({show: false});
    const [edit, setEdit] = useState(false);
    const [expenses, setExpenses] = useState([
        {id: 1, charge: '렌트비', amount: 1600},
        {id: 2, charge: '교통비', amount: 400},
        {id: 3, charge: '식비', amount: 1200}
    ]);

    const handleCharge = (e) => {
        setCharge(e.target.value);
    }

    const handleAmount = (e) => {
        // console.log(typeof e.target.valueAsNumber);
        console.log(typeof amount)
        setAmount(e.target.valueAsNumber);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                const newExpenses = expenses.map(item => {
                    return item.id === id ? {...item, charge, amount} : item;
                })

                setExpenses(newExpenses);
                setEdit(false);
                handleAlert({type: 'success', text: '항목이 수정되었습니다.'});
            } else {
                const singleExpense = {id: expenses.length + 1, charge, amount};
                setExpenses([...expenses, singleExpense]);
                handleAlert({type: 'success', text: '항목이 추가되었습니다.'});
            }
            setCharge("");
            setAmount(0);
        } else {
            console.log('charge or amount is empty');
            handleAlert({type: 'danger', text: '지출 항목과 비용은 빈 값일 수 없습니다.'});
        }
    }

    const handleAlert = ({type, text}) => {
        setAlert({show: true, type, text});
        setTimeout(() => {
            setAlert({show: false});
        }, 3000);
    }

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(newExpenses);
        handleAlert({type: 'danger', text: '항목이 삭제되었습니다.'});
    }

    const handleEdit = (id) => {
        const expense = expenses.find(expense => expense.id === id);
        const {charge, amount} = expense;
        setId(id);
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
    }

    const clearItems = () => {
        setExpenses([]);
    }


    return (
        <main className='main-container'>
            {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
            <h1>예산 계산기</h1>
            <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseForm
                    handleCharge={handleCharge}
                    charge={charge}
                    handleAmount={handleAmount}
                    amount={amount}
                    handleSubmit={handleSubmit}
                    edit={edit}
                />
            </div>
            <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseList
                    expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
                <p style={{fontSize: '2rem'}}>
                    총지출:
                    <span>
                        {expenses.reduce((acc, curr) => {
                            // return (acc += parseInt(curr.amount));
                            return (acc += curr.amount);
                        }, 0)}
                        원
                    </span>
                </p>
            </div>
        </main>
    )
}

export default App;