// Essa função troca o conteúdo da página de acordo com o botão clicado
function mostrarSecao(secaoId) {
  
  // Esconde todas as seções da página
  document.querySelectorAll('.section').forEach(secao => {
    secao.classList.remove('active'); // Remove a classe 'active' (que deixa visível)
  });

  // Mostra só a seção que foi clicada (adiciona a classe 'active')
  document.getElementById(secaoId).classList.add('active');

  // Remove o destaque (cor diferente) de todos os links do menu
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });

  // Destaca o link do menu correspondente à seção clicada
  // Exemplo: se clicou em "projetos", ativa o link com id="link-projetos"
  document.getElementById('link-' + secaoId).classList.add('active');
}
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
      alert(`Você clicou no ícone de ${icon.classList[1]}`);
  });
});