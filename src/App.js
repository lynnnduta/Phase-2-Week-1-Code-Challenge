import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2023-03-01',
      description: 'Starbucks',
      category: 'Food',
      amount: -5.0,
    },
    {
      id: 2,
      date: '2023-03-02',
      description: 'Amazon',
      category: 'Shopping',
      amount: -35.99,
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar transactions={transactions} setTransactions={setTransactions} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;