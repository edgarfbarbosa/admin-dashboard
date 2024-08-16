import { Routes, Route } from 'react-router-dom';

import './assets/css/tailwind.css';

import NavBar from './components/NavBar';
import AddProductPage from './pages/AddProductPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="flex">
      <NavBar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={null} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
