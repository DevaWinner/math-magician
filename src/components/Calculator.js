import './stylesheet/calculator.css';

function ResultLine() {
  return (
    <div className="line result-line">
      <p className="result-line-text">0</p>
    </div>
  );
}


function FirstLine() {
  return (
    <div className="line first-line">
      <button className="first-line-button" type="button">AC</button>
      <button className="first-line-button" type="button">+-</button>
      <button className="first-line-button" type="button">%</button>
      <button className="first-line-button last" type="button">+</button>
    </div>
  );
}

function SecondLine() {
  return (
    <div className="line second-line">
      <button className="second-line-button" type="button">7</button>
      <button className="second-line-button" type="button">8</button>
      <button className="second-line-button" type="button">9</button>
      <button className="second-line-button last" type="button">x</button>
    </div>
  );
}
