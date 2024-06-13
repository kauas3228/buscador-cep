import { FaSearch } from "react-icons/fa";

import './Home.css';

export default function Home() {
  return (
    <div className='container'>
      <h1 className='pageTitle'>Buscador de CEP</h1>
      <div className='inputContainer'>
        <input 
          type='text'
          placeholder='Digite seu CEP..'
        />
        <button className='inputButton'><FaSearch /></button>
      </div>
    </div>
  )
}
