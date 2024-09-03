import { AlignJustify } from 'lucide-react';

import Menu from './Menu';

const Header = () => {
  return (
    <header className="h-screen w-36 flex flex-col items-center">
      <div className="my-7">
        <button className="btn btn-square">
          <AlignJustify />
        </button>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
