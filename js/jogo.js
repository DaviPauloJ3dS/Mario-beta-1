const mario = document.querySelector('.mario');
const pipe = document.querySelector('#pipe1');
const nuvem = document.querySelector('#nuvem1');
var pulos = document.querySelector('.pulos');
const botaostart = document.querySelector('.botaostart');


var gameover = false
var quantpulos = 0

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {

        mario.classList.remove('jump');  
        quantpulos +=1
        pulos.textContent = `${quantpulos}`

    }, 1000)

};







const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const nuvemPosition = nuvem.offsetLeft


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
        gameover = true;
        pipe.classList.remove('pipe')
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.left = `${marioPosition}px`
        mario.src = './imagens/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
        mario.style.bottom = `${marioPosition}px`

        nuvem.classList.remove('nuvem')
        nuvem.style.left = `${nuvemPosition}px`
        
        clearInterval(loop)
    }


}, 10);

const start = () => {
    nuvem.classList.add('nuvem')
    pipe.classList.add('pipe')
}




botaostart.addEventListener('click', start);

document.addEventListener('keydown', jump);
