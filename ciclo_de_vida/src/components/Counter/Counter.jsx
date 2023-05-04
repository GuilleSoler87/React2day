// Ejercicio 1
// Crea un componente Counter (funcional) que contenga:
// - botón de decremento
// - contador
// - botón de incremento
// El componente mostrará un contador y podremos incrementarlo o decrementarlo en función de si pulsamos un botón u otro
// Que al instanciarlo pueda:
// - Que el contador pueda empezar desde un determinado número
//  -Que podamos decirle al componente si queremos que incremente de 2 en 2, 3 en 3, etc.

import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const handleIncrement = () => {
    setCounter(counter + props.incrementBy);
  }

  const handleDecrement = () => {
    setCounter(counter - props.incrementBy);
  }

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={handleDecrement}>-</button>
      <span className="counter-value">{counter}</span>
      <button className="counter-button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;

