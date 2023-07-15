import React from 'react';
import PropTypes from 'prop-types';

function FirstLine({ handleClick }) {
  return (
    <div className="line first-line">
      <button className="first-line-button" type="button" onClick={handleClick}>AC</button>
      <button className="first-line-button" type="button" onClick={handleClick}>+/-</button>
      <button className="first-line-button" type="button" onClick={handleClick}>%</button>
      <button className="first-line-button last" type="button" onClick={handleClick}>÷</button>
    </div>
  );
}

FirstLine.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

function SecondLine({ handleClick }) {
  return (
    <div className="line second-line">
      <button className="second-line-button" type="button" onClick={handleClick}>7</button>
      <button className="second-line-button" type="button" onClick={handleClick}>8</button>
      <button className="second-line-button" type="button" onClick={handleClick}>9</button>
      <button className="second-line-button last" type="button" onClick={handleClick}>x</button>
    </div>
  );
}

SecondLine.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

function ThirdLine({ handleClick }) {
  return (
    <div className="line third-line">
      <button className="third-line-button" type="button" onClick={handleClick}>4</button>
      <button className="third-line-button" type="button" onClick={handleClick}>5</button>
      <button className="third-line-button" type="button" onClick={handleClick}>6</button>
      <button className="third-line-button last" type="button" onClick={handleClick}>-</button>
    </div>
  );
}

ThirdLine.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

function FourthLine({ handleClick }) {
  return (
    <div className="line fourth-line">
      <button className="fourth-line-button" type="button" onClick={handleClick}>1</button>
      <button className="fourth-line-button" type="button" onClick={handleClick}>2</button>
      <button className="fourth-line-button" type="button" onClick={handleClick}>3</button>
      <button className="fourth-line-button last" type="button" onClick={handleClick}>+</button>
    </div>
  );
}

FourthLine.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

function FifthLine({ handleClick }) {
  return (
    <div className="line fifth-line">
      <button className="fifth-line-button first" type="button" onClick={handleClick}>0</button>
      <button className="fifth-line-button" type="button" onClick={handleClick}>.</button>
      <button className="last equal" type="button" onClick={handleClick}>=</button>
    </div>
  );
}

FifthLine.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export {
  FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine,
};
