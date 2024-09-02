import { Link } from 'react-router-dom';
import { AlignJustify, User, Package, PackagePlus } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="h-screen w-36 flex flex-col items-center">
      <div className="my-7">
        <button className="btn btn-square">
          <AlignJustify />
        </button>
      </div>
      <nav className="h-full flex items-start">
        <ul className="menu space-y-7">
          <li>
            <Link to="/">
              <User />
            </Link>
          </li>
          <li>
            <Link to="/products">
              <Package />
            </Link>
          </li>
          <li>
            <Link to="/addProduct">
              <PackagePlus />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
