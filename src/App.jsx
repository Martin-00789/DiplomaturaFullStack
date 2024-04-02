
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter> 
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="novedades" element={<NovedadesPage />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
