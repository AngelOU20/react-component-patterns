import { NavLink } from 'react-router-dom';
import { routes } from './routes';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <nav>
      <a href="#">
        <img src={logo} className="logo react" alt="React logo" />
      </a>

      <ul>
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};