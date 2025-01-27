import React from 'react';

interface GreetingProps {
  name: string; 
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
    const isValidAge = age === undefined || (age >= 0 && age <= 120);
  
    return (
      <div>
        <h1>Bonjour, {name} !</h1>
        {age !== undefined && isValidAge && <p>Vous avez {age} ans.</p>}
        {age !== undefined && !isValidAge && <p>L'âge spécifié est invalide.</p>}
      </div>
    );
  };

export default Greeting;
