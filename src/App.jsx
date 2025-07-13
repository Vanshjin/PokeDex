import { useState } from 'react'
// import Pokemon from './Component/pokemon'
import "./App.css"
import Home from '../page/Homepage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Pokemon from './components/pokemon'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact="true" element = {<Home/>}/>
      <Route path="/pokemon" exact="true" element = {<Pokemon/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App