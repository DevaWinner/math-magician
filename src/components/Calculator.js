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
