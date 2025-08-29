import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Terceirizacao from './components/Terceirizacao';
import GestaoDeMaoDeObra from './components/GestaoDeMaoDeObra';
import Confiabilidade from './components/Confiabilidade';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Servicos />
              <Contato />
            </>
          } />
          <Route path="/terceirizacao" element={<Terceirizacao />} />
          <Route path="/gestao-de-mao-de-obra" element={<GestaoDeMaoDeObra />} />
          <Route path="/confiabilidade" element={<Confiabilidade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
