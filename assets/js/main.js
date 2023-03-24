/*

Descrizione:

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.

Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder
- ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

BONUS
- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
- Formattare le date in formato italiano (gg/mm/aaaa)
- Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

*/

//creare l'array contenente i dati da stampare in pagina
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
//console.log(posts.length);

//selezionare il contenitore dove stampare dinamicamente gli oggetti (post)
const divElement = document.getElementById('container');
//console.log(divElement);

//creare un forEach per ciclare nell'array
posts.forEach(singlePost => {

    //controllare se il valore della proprietà dell'immagine del profilo è null
    if (singlePost.author.image === null) {
        //salvare nella proprietà dell'oggetto una stringa contente le iniziali del suo nome
        singlePost.author.image = `<h2>${singlePost.author.name.charAt(0) + singlePost.author.name.charAt(5)}</h2>`

    } else{
        singlePost.author.image = `<img class="profile-pic" src="${singlePost.author.image}" alt="Phil Mangione"></img>`
    }

    //creare una costante contenente il markup da inserire dinamicamente
    const markupPost = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${singlePost.author.image}               
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.author.name}</div>
                    <div class="post-meta__time">${singlePost.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.content}</div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="post_image">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
    
    //stampare nell'elemento selezionato il markup
    divElement.innerHTML += markupPost
});