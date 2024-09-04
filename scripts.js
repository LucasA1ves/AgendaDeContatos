function adicionarContato() {
  // Obtém os valores do formulário
  var nome = document.getElementById('nome').value
  var telefone = document.getElementById('telefone').value

  // Cria uma nova linha na tabela
  var tabela = document
    .getElementById('tabelaContatos')
    .getElementsByTagName('tbody')[0]
  var novaLinha = tabela.insertRow()

  // Insere as células (nome e telefone) na nova linha
  var celulaNome = novaLinha.insertCell(0)
  var celulaTelefone = novaLinha.insertCell(1)

  celulaNome.textContent = nome
  celulaTelefone.textContent = telefone

  // Limpa os campos do formulário após a inserção
  document.getElementById('nome').value = ''
  document.getElementById('telefone').value = ''
}
