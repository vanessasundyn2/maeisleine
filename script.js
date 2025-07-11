document.getElementById('form-agendamento').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(!nome || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const texto = `Olá, meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de agendar: ${mensagem}`;
  const url = `https://wa.me/5551989223827?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});
