import { Link } from 'react-router-dom';

const MenuItem = ({ tooltip, to, children }) => {
  return (
    <li className="tooltip tooltip-right tooltip-primary" data-tip={tooltip}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default MenuItem;
