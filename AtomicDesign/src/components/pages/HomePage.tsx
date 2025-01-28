import React from 'react';
import PizzaCard from '@molecules/PizzaCard/PizzaCard';

const HomePage: React.FC = () => {
  const handleOrder = (pizzaName: string) => {
    alert(`${pizzaName} ordered!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenue sur mon appli PizzApp</h1>
      <PizzaCard name="Margherita" onOrder={() => handleOrder("Margherita")} />
      <PizzaCard name="Pepperoni" onOrder={() => handleOrder("Pepperoni")} />
    </div>
  );
};

export default HomePage;
