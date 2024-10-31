import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile/Profile';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
