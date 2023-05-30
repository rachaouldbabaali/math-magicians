import React from 'react';

function Calculator() {
  return (
    <div className="calculator-wrap">
      <div className="calculator-display">0</div>
      <div className="calculator-keypads">
        <button className="key1" type="button">AC</button>
        <button className="key2" type="button">+/-</button>
        <button className="key3" type="button">%</button>
        <button className="key4" type="button">&#247;</button>
        <button className="key5" type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="key8" type="button">&#215;</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="key12" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="key12" type="button">+</button>
        <button className="key17" type="button">0</button>
        <button type="button">.</button>
        <button className="key19" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
