import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult('Error');
    }
  };

  const handledel = (value) => {
    setInput((prev) => prev.slice(0, -1))
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button label="7" onClick={() => handleClick('7')} />
        <Button label="8" onClick={() => handleClick('8')} />
        <Button label="9" onClick={() => handleClick('9')} />
        <Button label="/" onClick={() => handleClick('/')} />
        <Button label="4" onClick={() => handleClick('4')} />
        <Button label="5" onClick={() => handleClick('5')} />
        <Button label="6" onClick={() => handleClick('6')} />
        <Button label="*" onClick={() => handleClick('*')} />
        <Button label="1" onClick={() => handleClick('1')} />
        <Button label="2" onClick={() => handleClick('2')} />
        <Button label="3" onClick={() => handleClick('3')} />
        <Button label="-" onClick={() => handleClick('-')} />
        <Button label="0" onClick={() => handleClick('0')} />
        <Button label="00" onClick={() => handleClick('00')} />
        <Button label="." onClick={() => handleClick('.')} />
        <Button label="+" onClick={() => handleClick('+')} />
        <Button label="C" onClick={handleClear} />
        <Button label="Del" onClick={handledel} />
        <Button label="=" className='eq' onClick={handleCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
