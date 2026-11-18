import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Import page components here
import Users from './Users'
import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>Port of Troy</h1>
      </header>
      <section>
        <p>Welkom op de pagina van Port of Troy.</p>
      </section>
         <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Users />} />
      </Routes>
    </BrowserRouter>
  
    </main>
    
  )
}

export default App
