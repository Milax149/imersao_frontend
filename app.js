//console.log(receitas);

function pesquisar() {
    const termoBusca = document.getElementById('busca').value.toLowerCase();
    const resultadosPesquisa = document.getElementById('resultados-pesquisa');
    
    if (!termoBusca) {
      resultadosPesquisa.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return 
  }

    const receitasFiltradas = receitas.filter(receita => {
      return receita.nome.toLowerCase().includes(termoBusca) ||
             receita.ingredientes.join(' ').toLowerCase().includes(termoBusca) ||
             receita.tags.join(' ').toLowerCase().includes(termoBusca);
    });
  
    receitasFiltradas.forEach(receita => {
      const itemResultado = document.createElement('div');
      itemResultado.classList.add('item-resultado');
  
      itemResultado.innerHTML = `
        <h2>${receita.nome}</h2>
        <img src="${receita.imagem}" alt="${receita.nome}" width="300" height="200">
        <h2>Ingredientes:</h2>
        <ul>
          ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
        <h2>Modo de Preparo:</h2>
        <ol>
          ${receita.preparo.map(passo => `<li>${passo}</li>`).join('')}
        </ol>
      `;
      
      if (!itemResultado) {
        itemResultado = "<p>Nada foi encontrado</p>"
    }

      resultadosPesquisa.appendChild(itemResultado);
    });
  }


