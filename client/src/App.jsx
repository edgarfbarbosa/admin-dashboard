import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/tailwind.css';

import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
