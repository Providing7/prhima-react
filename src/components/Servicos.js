import { Link } from 'react-router-dom';

function Servicos() {
  return (
    <section id="servicos">
      <h2>Nossos Serviços</h2>
      <div className="card">
        <Link to="/terceirizacao" style={{ textDecoration: 'none', color: '#003366', fontWeight: 'bold' }}>
          Terceirização
        </Link>
      </div>
      <div className="card">
        <Link to="/gestao-de-mao-de-obra" style={{ textDecoration: 'none', color: '#003366', fontWeight: 'bold' }}>
          Gestão de Mão de Obra
        </Link>
      </div>
      <div className="card">
        <Link to="/confiabilidade" style={{ textDecoration: 'none', color: '#003366', fontWeight: 'bold' }}>
          Confiabilidade
        </Link>
      </div>
    </section>
  );
}

export default Servicos;