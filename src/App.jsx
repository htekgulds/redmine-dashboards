import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App () {
  return (
    <div className='min-h-screen bg-base-200'>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className='container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
        <aside>
          <p>© {new Date().getFullYear()} DevOps Adam. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  )
}

export default App
