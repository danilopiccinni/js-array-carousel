const immagini = ['img/01.webp', 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp' ]
// costanti e variabili
let contImgEl = document.getElementById ('cont-img')
let frecciaSuEl = document.getElementById ('freccia-su')
let frecciaGiuEl = document.getElementById ('freccia-giu')
let contAnteprimeEl = document.getElementById ('cont-anteprime')

for (i=0 ; i < immagini.length ; i++) {

    let nuovaAnteprima = document.createElement ('img')
    contAnteprimeEl.append (nuovaAnteprima)
    nuovaAnteprima.style.height = 'calc(100% /' + immagini.length + ')'
    nuovaAnteprima.style.width = 'calc(100 / 5)'
    nuovaAnteprima.classList.add ('anteprime')
    nuovaAnteprima.src = immagini[i]

}

const anteprime = document.querySelectorAll ('.anteprime')
// immagine da visualizzare al caricamento della pagina
let index = 0;
contImgEl.src = immagini[index]
anteprime[index].classList.add('active')


console.log (immagini.length)

frecciaSuEl.addEventListener ('click' , function() {

    if (index == 0) {
        anteprime[index].classList.remove('active')
        index = immagini.length
    }

    index--;
    
    contImgEl.src = immagini[index]
    
    anteprime[index].classList.add('active')
    console.log(index)
    anteprime[index + 1].classList.remove('active')
    
}) 

frecciaGiuEl.addEventListener ('click' , function(){
    
    index++;
    anteprime[index - 1].classList.remove('active')
    
    if (index == immagini.length) {
        index = 0 
    }
    
    contImgEl.src = immagini[index]
    anteprime[index].classList.add('active')
    
    
})