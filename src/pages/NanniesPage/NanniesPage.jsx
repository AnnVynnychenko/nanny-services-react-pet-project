import { Link, Outlet } from 'react-router-dom';
import NannyDetails from '../../components/NannyDetails';

function NanniesPage() {
  return (
    <>
      <div>NanniesPage</div>
      <Link to="details">
        <NannyDetails />
      </Link>
      <Outlet />
    </>
  );
}

export default NanniesPage;
