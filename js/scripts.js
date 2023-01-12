const container = document.querySelector('.container');

const arrayBomb = [];

let punteggio = 1;

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

    container.innerHTML = ''
    
    for(let i = 1; i <= 100; i++){
        
        const square = createSquare(i)
        container.append(square)
    
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
            
        }
        else{
            
            for(let p = 0; p < 1; p++){
                
                const spanPunteggio = document.querySelector('span').innerHTML = punteggio
                this.classList.add('click');
                punteggio++
            
            }
        }
        
    })

    newSquare.innerHTML = number;
    
    return newSquare 
}

function getRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

