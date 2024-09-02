import { Package, PackagePlus } from 'lucide-react';

import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <nav className="h-full flex items-start">
      <ul className="menu space-y-7">
        <MenuItem tooltip="Produtos" to="/products">
          <Package />
        </MenuItem>
        <MenuItem tooltip="Adicionar Produto" to="/register">
          <PackagePlus />
        </MenuItem>
      </ul>
    </nav>
  );
};

export default Navbar;
