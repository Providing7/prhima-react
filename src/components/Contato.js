function Contato() {
  return (
    <section id="contato">
      <h2>Fale Conosco</h2>
      <form id="form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;