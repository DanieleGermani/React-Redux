import React from 'react';
import Button from '../Button';

export const Operators = ({
  operators = ["+", "-", "*", "/"],
  calculateSign = "=",
  className = "buttons--operators",
  operatorClickHander, calculateExpression
}) => (
    <section className={className}>
        {operators.map((op, i) => (
            <Button key={i} text={op} clickHandler={operatorClickHander}/>)
        )}
        <Button text={calculateSign} clickHandler={calculateExpression}/>
    </section>
)

export default Operators;
