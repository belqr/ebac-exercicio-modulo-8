const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const tabela = document.getElementById('contact-table');

document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();

   const tr = document.createElement('tr');
   const tdNome = document.createElement('td');
   const tdTelefone = document.createElement('td');

   tdNome.innerText = nome.value;
   tdTelefone.innerText = telefone.value;

   tr.appendChild(tdNome);
   tr.appendChild(tdTelefone);

   tabela.appendChild(tr);

   armazenarContatos(nome.value, telefone.value);

   nome.value = '';
   telefone.value = '';
});

function armazenarContatos(nome, telefone) {
   let listaContato = JSON.parse(localStorage.getItem('contact-table')) || [];
   const contato = { nome, telefone};
   listaContato.push(contato);

   localStorage.setItem('contact-table', JSON.stringify(listaContato));
}

function listarContatosSalvos() {
   let listaContato = JSON.parse(localStorage.getItem('contact-table')) || [];

   listaContato.forEach(contato => {
      const tr = document.createElement('tr');
      const tdNome = document.createElement('td');
      const tdTelefone = document.createElement('td');

      tdNome.innerText = contato.nome;
      tdTelefone.innerText = contato.telefone;
      
      tr.appendChild(tdNome);
      tr.appendChild(tdTelefone);

      tabela.appendChild(tr);
   });
}

function limparTabela() {
   tabela.innerHTML = [];
}

listarContatosSalvos();
