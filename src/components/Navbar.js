import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Sobre</Link></li>
        <li><HashLink smooth to="/#servicos">Serviços</HashLink></li>
        <li><HashLink smooth to="/#contato">Contato</HashLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;