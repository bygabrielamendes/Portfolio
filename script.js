// Essa função troca o conteúdo da página de acordo com o botão clicado
function mostrarSecao(secaoId) {

  // Esconde todas as seções da página
  document.querySelectorAll('.secao').forEach(secao => {
    secao.classList.remove('ativo'); // Remove a classe 'active' (que deixa visível)
  });
  // Mostra só a seção que foi clicada (adiciona a classe 'active')
  document.getElementById(secaoId).classList.add('ativo');
  
  // Remove o destaque (cor diferente) de todos os links do menu
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('ativo');
  });

  // Destaca o link do menu correspondente à seção clicada
  // Exemplo: se clicou em "projetos", ativa o link com id="link-projetos"
  document.getElementById('link-' + secaoId).classList.add('ativo');
}
