import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fruit from './components/Fruit';
import Vegetable from './components/Vegetable';
import Staple from './components/Staple';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/vegetable" element={<Vegetable />} />
        <Route path="/staple" element={<Staple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;