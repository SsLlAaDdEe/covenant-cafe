import React from 'react';
import { useLocation } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const location = useLocation();
  const { name, balance, transaction_history } = location.state;

  return (
    <div>
      <h1 className='Hello'>Hello {name}</h1>
      <h2 className='Bal'>Account Balance: #{balance}</h2>
      <h3 className='Tran'>Transaction History:</h3>
      <ul className='frontpage-container'>
        {transaction_history.map((transaction, index) => (
          <li key={index}>{transaction.description}: #{transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrontPage;
