import './Terceirizacao.css';

function Terceirizacao() {
  return (
    <section className="terceirizacao-container">
      <h2>Terceirização Profissional</h2>
      <p>
        A <b>PRHIMA</b> oferece soluções completas de terceirização para empresas que buscam eficiência, redução de custos e foco no core business. Com mais de 17 anos de experiência, conectamos talentos ao mercado e garantimos a gestão de equipes com qualidade e segurança.
      </p>

      <h3>Vantagens da Terceirização:</h3>
      <ul>
        <li>✔ Redução de custos operacionais e trabalhistas</li>
        <li>✔ Foco total no crescimento do seu negócio</li>
        <li>✔ Equipes treinadas e qualificadas</li>
        <li>✔ Flexibilidade para aumentar ou reduzir equipes</li>
        <li>✔ Gestão de pessoas e processos por especialistas</li>
        <li>✔ Cumprimento rigoroso da legislação</li>
      </ul>

      <h3>Áreas de Atuação:</h3>
      <ul>
        <li>• Limpeza e conservação</li>
        <li>• Portaria e recepção</li>
        <li>• Serviços administrativos</li>
        <li>• Apoio operacional</li>
        <li>• Entre outros</li>
      </ul>

      <div style={{ textAlign: "center" }}>
        <a href="#contato" className="terceirizacao-btn">
          Solicite uma proposta
        </a>
      </div>

      <p className="terceirizacao-final">
        Entre em contato e descubra como a terceirização pode transformar sua empresa!
      </p>
    </section>
  );
}

export default Terceirizacao;