import { FaSearch } from "react-icons/fa";

import './Home.css';
import { useState } from "react";
import api from "../services/api";

export default function Home() {
  const [cep, setCep] = useState<any>({});
  const [input, setInput] = useState<string>('');
  
  const handleInputChange = (e: any) => {
    const data = e.target.value;

    setInput(data);
  }
  
  const handleSearch = async () => {
    if(input === ''){
      alert('Informe um cep!')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);

      setInput('');
      setCep(response.data);

    }catch{
      alert('Erro ao realizar busca');
      setInput('');
    }
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
        <button className='inputButton' onClick={handleSearch}><FaSearch /></button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="cepInformations">
        <span className="CEP">CEP: {cep.cep}</span>
        <span className="informations">{cep.logradouro}</span>
        <span className="informations">{cep.bairro}</span>
        <span className="informations">DDD: {cep.ddd}</span>
        <span className="informations">{cep.localidade} - {cep.uf}</span>
      </div>
      )}
    
    </div>
  )
}
