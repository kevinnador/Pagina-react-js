import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ backgroundColor: '#61dafb', color: 'white', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: '10px' }}>
        <li> <Link to="/Inicio">Inicio</Link></li>
        <li> <Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
