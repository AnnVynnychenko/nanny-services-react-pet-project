import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/">Nanny.Services</NavLink>
        <nav>
          {' '}
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/nannies">Nannies</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
