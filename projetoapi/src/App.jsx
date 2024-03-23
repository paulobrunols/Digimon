import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Conteudo from "./components/Conteudo"
import Menu from "./components/Menu"
import { ThemeProvider } from "./components/Contexts/ThemeContext"




export default function App(){
  return(
    <>
    <ThemeProvider>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Conteudo" element={<Conteudo />} />
      <Route />
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}