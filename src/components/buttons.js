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
      <button className="first-line-button" type="button">+/-</button>
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

function ThirdLine() {
  return (
    <div className="line third-line">
      <button className="third-line-button" type="button">4</button>
      <button className="third-line-button" type="button">5</button>
      <button className="third-line-button" type="button">6</button>
      <button className="third-line-button last" type="button">-</button>
    </div>
  );
}

function FourthLine() {
  return (
    <div className="line fourth-line">
      <button className="fourth-line-button" type="button">1</button>
      <button className="fourth-line-button" type="button">2</button>
      <button className="fourth-line-button" type="button">3</button>
      <button className="fourth-line-button last" type="button">+</button>
    </div>
  );
}

function FifthLine() {
  return (
    <div className="line fifth-line">
      <button className="fifth-line-button first" type="button">0</button>
      <button className="fifth-line-button" type="button">.</button>
      <button className="fifth-line-button last" type="button">=</button>
    </div>
  );
}

export {
  ResultLine, FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine,
};
