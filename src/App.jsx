import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
