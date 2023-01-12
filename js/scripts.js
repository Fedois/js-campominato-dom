const containerSx = document.querySelector('.container-sx');

const arrayBomb = [];

let punteggio = 1;

let spanPunteggio = document.querySelector('span')

const Lose = document.querySelector('.lose');
const win = document.querySelector('.win')

const playAgain = document.querySelector('.again')

console.log('numero bombe:', arrayBomb)

for(let j = 1; j <= 16; j++){
    let bomb = getRandomNumber(1, 100);

    while(arrayBomb.includes(bomb)){
        
        bomb = getRandomNumber(1, 100);

    }
        
    arrayBomb.push(bomb);

}

const play = document.querySelector('button')
play.addEventListener('click', function(){

    
    containerSx.innerHTML = '';
    Lose.innerHTML = '';
    win.innerHTML = '';
    spanPunteggio.innerHTML = '';
    playAgain.innerHTML = '';
    
    for(let i = 1; i <= 100; i++){
        
        const square = createSquare(i)
        containerSx.append(square)
    
    }
})




// FUNCTION

function createSquare(number) {
    
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    

    newSquare.addEventListener('click', function () {

        let currNum = parseInt(this.innerText);
        console.log(currNum)
        
        if(arrayBomb.includes(currNum)){
            this.classList.add('bomb');

            Lose.innerHTML = 'HAI PERSO';
            playAgain.innerHTML = 'per giocare di nuovo clicca su "play"';

            const divTransp = document.createElement('div');
            divTransp.className = 'transparent'
            containerSx.append(divTransp)
            
        }
        else{
            
            for(let p = 0; p < 1; p++){
                
                spanPunteggio.innerHTML = punteggio
                this.classList.add('click');
                punteggio++

                if(punteggio == 85){
                    
                    win.innerHTML = 'HAI VINTO';
                    playAgain.innerHTML = 'per giocare di nuovo clicca su "play"';

                    const divTransp = document.createElement('div');
                    divTransp.className = 'transparent';
                    containerSx.append(divTransp);
                
                }
            
            }
        }
        
    })

    newSquare.innerHTML = number;
    
    return newSquare 
}

function getRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

