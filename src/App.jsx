import { Routes, Route } from 'react-router-dom';

import './assets/css/tailwind.css';

import Header from './components/Header';
import ProductRegisterPage from './pages/ProductRegisterPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="flex">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/register" element={<ProductRegisterPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
