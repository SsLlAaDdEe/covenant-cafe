import React from 'react';
import { useLocation } from 'react-router-dom';

const FrontPage = () => {
  const location = useLocation();
  const { name, balance, transaction_history } = location.state;

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Account Balance: #{balance}</h2>
      <h3>Transaction History:</h3>
      <ul>
        {transaction_history.map((transaction, index) => (
          <li key={index}>{transaction.description}: #{transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrontPage;
