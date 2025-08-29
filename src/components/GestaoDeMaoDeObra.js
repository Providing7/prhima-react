import './GestaoDeMaoDeObra.css';

function GestaoDeMaoDeObra() {
  return (
    <section className="gestao-container">
      <h2>Gestão de Mão de Obra</h2>
      <p>
        Nossa gestão de mão de obra garante eficiência, produtividade e tranquilidade para sua empresa. Cuidamos de todos os processos relacionados à administração de equipes, desde o recrutamento até o acompanhamento do desempenho.
      </p>

      <h3>O que oferecemos:</h3>
      <ul>
        <li>✔ Recrutamento e seleção de profissionais qualificados</li>
        <li>✔ Treinamento e integração de equipes</li>
        <li>✔ Gestão de folha de pagamento e benefícios</li>
        <li>✔ Controle de ponto e jornada</li>
        <li>✔ Acompanhamento de desempenho e feedbacks</li>
        <li>✔ Suporte trabalhista e legal</li>
      </ul>

      <div style={{ textAlign: "center" }}>
        <a href="#contato" className="gestao-btn">
          Solicite uma proposta
        </a>
      </div>

      <p className="gestao-final">
        Deixe a gestão de pessoas com quem entende do assunto. Fale conosco!
      </p>
    </section>
  );
}

export default GestaoDeMaoDeObra;