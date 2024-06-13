import { FaSearch } from "react-icons/fa";

import './Home.css';
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: any) => {
    const data = e.target.value;

    setInput(data);
    console.log(input)
  }
  
  return (
    <div className='container'>
      <h1 className='pageTitle'>Buscador de CEP</h1>
      <div className='inputContainer'>
        <input
          type='text'
          placeholder='Digite seu CEP...'
          value={input}
          onChange={handleInputChange}
        />
        <button className='inputButton'><FaSearch /></button>
      </div>
      <div className="cepInformations">
        <span className="CEP">CEP: 01310-930</span>
        <span className="informations">Avenida Paulista</span>
        <span className="informations">Complemento: 2100</span>
        <span className="informations">Bela Vista</span>
        <span className="informations">Sao Paulo - SP</span>
      </div>
    </div>
  )
}
