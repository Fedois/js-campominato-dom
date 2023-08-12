const containerSx = document.querySelector('.container-sx');
let arrayBomb = [];
let score = 0;
let numPunteggio = document.querySelector('h2')
const result = document.querySelector('.result');
const playAgain = document.querySelector('.again')
const level = document.querySelector('.play > select')
let infoNumSquare = document.querySelector('.info-num-square')
const viewBomb = document.querySelector('.view-bomb')
const play = document.querySelector('button')

level.addEventListener('input', function(){
    switch (level.value) {
        case 'easy':
            infoNumSquare.innerHTML = '100 squares'
            break;
    
        case 'medium':
            infoNumSquare.innerHTML = '49 squares'
            break;
        case 'hard':
            infoNumSquare.innerHTML = '25 squares'
            break;
    }
})

play.addEventListener('click', function(){
    viewBomb.style.display = 'block'
    play.style.display = 'none';
    level.style.display = 'none';


    arrayBomb = []
    console.log('vincere questo gioco è impossibile, quindi ti ecco a te le bombe:', arrayBomb)

    containerSx.innerHTML = '';
    score = 0;
    result.innerHTML = '';
    numPunteggio.innerHTML = 'SCORE: 0';
    playAgain.innerHTML = '';

   if (level.value == 'easy'){
    for(let i = 1; i<= 16; i++){
        let bomb = getRandomNumber(1, 100);

        while(arrayBomb.includes(bomb)){
            
            bomb = getRandomNumber(1, 100);

        }  
        arrayBomb.push(bomb);
    }

    for(let i = 1; i <= 100; i++){
        const square = createSquare(i)
        containerSx.append(square)
    }
   } else if (level.value == 'medium'){
    for(let i = 1; i<= 16; i++){
        let bomb = getRandomNumber(1, 49);

        while(arrayBomb.includes(bomb)){
            
            bomb = getRandomNumber(1, 49);

        }  
        arrayBomb.push(bomb);
    }

    for(let i = 1; i <= 49; i++){
        const square = createSquare(i)
        containerSx.append(square)
    }
   } else {
    for(let i = 1; i<= 16; i++){
        let bomb = getRandomNumber(1, 25);

        while(arrayBomb.includes(bomb)){
            
            bomb = getRandomNumber(1, 25);

        }  
        arrayBomb.push(bomb);
    }

    for(let i = 1; i <= 25; i++){
        const square = createSquare(i)
        containerSx.append(square)
    }
   }
   
   viewBomb.addEventListener('click', function(){
    viewBomb.style.display = 'none'
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        if(arrayBomb.includes(parseInt(square.innerHTML))) {
            square.style.backgroundColor = 'red'
            let seconds = ""

            switch (level.value) {
                case 'easy':
                    seconds = "200"
                    break;
            
                case 'medium':
                    seconds = "100"
                    break;
                case 'hard':
                    seconds = "50"
                    break;
            }

            setTimeout(() => {
                square.style.backgroundColor = '';
            }, seconds);
        }
    })
   })
})


// FUNCTIONS

function createSquare(number) {
    
    const newSquare = document.createElement('div');
    newSquare.innerHTML = number;
    newSquare.classList.add('square');
    
    if (level.value == 'easy'){
        newSquare.style.height = 'calc(100% / 10)'
        newSquare.style.width = 'calc(100% / 10)'

    } else if (level.value == 'medium'){
        newSquare.style.height = 'calc(100% / 7)'
        newSquare.style.width = 'calc(100% / 7)'
    } else {
        newSquare.style.height = 'calc(100% / 5)'
        newSquare.style.width = 'calc(100% / 5)'
    }

    newSquare.addEventListener('click', function () {
        let currNum = parseInt(this.innerText);
        
        if(arrayBomb.includes(currNum)){
            viewBomb.style.display = 'none'
            this.classList.add('bomb');

            result.innerHTML = 'HAI PERSO';
            result.style.color = 'red'
            playAgain.innerHTML = 'per giocare di nuovo clicca "play"';

            const divTransp = document.createElement('div');
            divTransp.className = 'transparent'
            containerSx.append(divTransp)
            
        }
        else{
            if (this.classList.contains('safe')){
                score
            }
            else {
                score++
                if ((level.value == 'easy' && score % 12 == 0) || (level.value == 'medium' && score % 7 == 0) || (level.value == 'hard' && score % 5 == 0)){
                    viewBomb.style.display = 'block'
                }
            }
            this.classList.add('safe');
            numPunteggio.innerHTML = 'SCORE: ' + score;
            
            if((level.value == 'easy' &&score == 84) || ((level.value == 'medium' &&score == 33)) || (level.value == 'hard' &&score == 9)){
                result.innerHTML = 'HAI VINTO';
                result.style.color = 'green'
                playAgain.innerHTML = 'per giocare di nuovo clicca su "play"';

                const divTransp = document.createElement('div');
                divTransp.className = 'transparent';
                containerSx.append(divTransp);
            }
        }

        if (result.innerHTML == 'HAI PERSO' || result.innerHTML == 'HAI VINTO'){
            play.style.display = 'inline'
            level.style.display = 'inline'
        }
    })

    return newSquare 
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

