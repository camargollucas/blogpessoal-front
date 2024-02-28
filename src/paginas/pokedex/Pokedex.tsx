import React from 'react';
import './Pokedex.css'

const Pokedex: React.FC = () => {
  return (
    <div className="Pokedex">
      <iframe
        title="Pokédex"
        src="https://pokedex-flame-pi.vercel.app/"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Pokedex;