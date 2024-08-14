import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/addProduct">Adicionar Produto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
