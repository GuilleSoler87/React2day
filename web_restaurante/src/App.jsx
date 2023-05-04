import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const dishes = [
  {
    id: 1,
    name: 'Arroz a la cubana',
    description: 'Un arroz simple pero increible ',
    price: 10,
  },
  {
    id: 2,
    name: 'Hamburguesa',
    description: 'Hamburguesa Gourmet con pan negro',
    price: 20
  },
  {
    id: 3,
    name: 'Pizza ',
    description: 'La mejor Pizza de tu vida',
    price: 15
  }
];

function App() {
  return (
    <div>
      <Header />
      <Home dishes={dishes} />
    </div>
  );
}

export default App;

