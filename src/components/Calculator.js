import './stylesheet/calculator.css';
import {
  ResultLine, FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine,
} from './buttons';

function Calculator() {
  return (
    <div className="calculator">
      <ResultLine />
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <FourthLine />
      <FifthLine />
    </div>
  );
}

export default Calculator;
