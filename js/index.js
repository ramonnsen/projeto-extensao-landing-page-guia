console.log("aaaaaaaaaa")


fetch('../data/artigos.json')
.then(response => response.json())
.then(artigos => {
    
    const container = document.getElementById('artigos')

    artigos.forEach(artigo =>{

        container.innerHTML += `
        <div class="card-artigo">
        <img class="img-artigo" src="${artigo.imagem}" alt="${artigo.titulo}">
        <p class="tag-artigo">${artigo.tag}</p>
        <p class="titulo-artigo">${artigo.titulo}</p>
        <p class="descricao-artigo">${artigo.descricao}</p>
        <a class="link-artigo" href="${artigo.link}">Ler artigo -></a>
        </div>
        `
    })
})