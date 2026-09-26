import { useState } from 'react'
import heroImg from './assets/hero_headphones.png'
import reactLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
      </section>
    </>
  )
}

export default App
