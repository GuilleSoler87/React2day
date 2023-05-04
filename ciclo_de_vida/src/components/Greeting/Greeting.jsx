// Crea un componente Greeting (funcional) que contenga:
// - Una etiqueta “p” que diga “Hola Euralio”
// Ahora Euralio en vez de escribirlo a fuego, haz que venga como “props” desde el componente padre.
// Por último, cuando se monte el componente Greeting y pasen 3 segundos el componente debe mostrar: “Hola Alfonsina”

import { useState, useEffect } from 'react';
import './Greeting.css';

function Greeting(props) {
  const [name, setName] = useState(props.name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setName('Alfonsina');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <p className="greeting-text">Hola {name}</p>;
}

export default Greeting;

