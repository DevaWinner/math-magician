import React, { useState } from 'react';
import '../stylesheet/calculator.css';
import {
  FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine,
} from './buttons';
import ResultLine from './ResultLine';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setObject(calculate(obj, e.target.innerHTML));
  };

  return (
    <div className="calculator">
      <ResultLine total={obj.total} operation={obj.operation} next={obj.next} />
      <FirstLine handleClick={handleClick} />
      <SecondLine handleClick={handleClick} />
      <ThirdLine handleClick={handleClick} />
      <FourthLine handleClick={handleClick} />
      <FifthLine handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
