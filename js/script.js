const immagini = [
    'img/01.webp', 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp' ,
    'https://fastly.picsum.photos/id/530/1000/500.jpg?hmac=VDNut0o4MMrdElr4WzXiLN-PqiI5GlB5bmVwFd_DZ6A',
    'https://fastly.picsum.photos/id/786/1000/500.jpg?hmac=0ADJU0hgDIz9EZeav9xCIzUCN6wxVoc5WuPTEYOQZ74',
    'https://fastly.picsum.photos/id/400/1000/500.jpg?hmac=GhiCnRYFGp-Y-Ib4jUOymPWvj8KQ9RS0XfaGFF7MdXo',
    'https://fastly.picsum.photos/id/381/1000/500.jpg?hmac=jb81WyoEAGfWPpshlMZAbZpoBFUOZsjrsv7QolmSW4g',
    'https://fastly.picsum.photos/id/1060/1000/500.jpg?hmac=Yrz0AMRpLLASgx-KrB5AMcCQZx3eAQaUI3aayxHvAOc',
]

console.log (immagini)
// costanti e variabili
let contImgEl = document.getElementById ('cont-img')
let frecciaSuEl = document.getElementById ('freccia-su')
let frecciaGiuEl = document.getElementById ('freccia-giu')

// immagine da visualizzare al caricamento della pagina
let index = 0;
contImgEl.src = immagini[index]

console.log (immagini.length)

frecciaSuEl.addEventListener ('click' , function() {
    console.log(index)

    index++;

    if ((index) == immagini.length) {
        index = 0 
    }

    contImgEl.src = immagini[index]
}) 

frecciaGiuEl.addEventListener ('click' , function(){

    if (index == 0) {
        index = immagini.length
    }

    index--;
    contImgEl.src = immagini[index]
})