import React from 'react';
import Calculator from './components/Calculator';
import FetchQuote from './api/FetchQuote';
import './stylesheet/App.css';
import './stylesheet/quote.css';

function App() {
  return (
    <div className="app">
      <Calculator />
      <FetchQuote />
    </div>
  );
}

export default App;
