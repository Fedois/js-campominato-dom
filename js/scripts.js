// alert('per iniziare a giocare clicca su "play"')

const container = document.querySelector('.container');
const arrayBomb = [];
console.log('numero bombe:', arrayBomb)
const arrayNum = [];
console.log('numero celle:', arrayNum);

const play = document.querySelector('button')
play.addEventListener('click', function(){
    
container.innerHTML = ''
    
    for(let i = 1; i <= 100; i++){

        const square = createSquare(i)
        container.append(square)

        arrayNum.push(i)
    
    }
})

for(let j = 1; j <= 16; j++){
    let bomb = getRandomNumber(1, 16);

    while(arrayBomb.includes(bomb)){
        
        bomb = getRandomNumber(1, 16);

    }
        
    arrayBomb.push(bomb);

}


// FUNCTION

function createSquare(number) {
    
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    

    newSquare.addEventListener('click', function () {

        this.classList.add('click');
        console.log(this.innerText);
        
    })

    newSquare.innerHTML = number;
    
    return newSquare 
}

function getRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
