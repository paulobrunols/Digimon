import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const Home = () => {

const {theme, toggleTheme} = useContext(ThemeContext);


  return (
    <div style={{backgroundColor: theme.background, color: theme.text}}>
    <h1>Bem-vindo à API do Digimon</h1>
    <label>
        <input type="checkbox" onChange={toggleTheme}/>
    </label>
    </div>
  )
}

export default Home