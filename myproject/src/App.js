import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navi from './components/Navi';
import IT from './pages/IT';
import Economy from './pages/Economy';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container mt-4">
      <Navi/>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/*메인페이지*/}
          <Route path="/it" element={<IT />} /> {/*메인페이지*/}
          <Route path="/economy" element={<Economy />} /> {/*메인페이지*/}
        </Routes>
      </Router>
      <footer className="bg-dark text-white text-center py-2" style={{ fontSize: '1.4rem' }}>
        <p>&copy; windra</p>
      </footer>
    </div>
    
  );
}

export default App;
