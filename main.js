'mode strict'

const links = {
    "nome": "Carol Mendes Ferreira",
    "img": "./imagens/moana.png",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "http://www.fernandoleonid.com.br/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/fernandoleonid/"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/fernandoleonid"
        }
    ]
}

const moana = document.getElementById('moana');
moana.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const  site = document.getElementsByTagName('a')[0];
site.textContent = links.links[0].titulo;
site.href = links.links[0].url;

const  youtube = document.getElementsByTagName('a')[1];
youtube.textContent = links.links[1].titulo;
youtube.href = links.links[1].url;

const  linkedin = document.getElementsByTagName('a')[2];
linkedin.textContent = links.links[2].titulo;
linkedin.href = links.links[2].url;

const  twitter = document.getElementsByTagName('a')[3];
twitter.textContent = links.links[3].titulo;
twitter.href = links.links[3].url;




