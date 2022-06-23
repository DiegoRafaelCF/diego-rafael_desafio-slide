import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/404' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
