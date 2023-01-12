const container = document.querySelector('.container');

const arrayBomb = [];
console.log('numero bombe:', arrayBomb)

const arrayNum = [];
console.log('numero celle:', arrayNum);

for(let j = 1; j <= 16; j++){
    let bomb = getRandomNumber(1, 16);

    while(arrayBomb.includes(bomb)){
        
        bomb = getRandomNumber(1, 16);

    }
        
    arrayBomb.push(bomb);

}

const play = document.querySelector('button')
play.addEventListener('click', function(){
    
container.innerHTML = ''
    
    for(let i = 1; i <= 100; i++){
        
        const square = createSquare(i)
        container.append(square)

        arrayNum.push(i)
    
    }
})




// FUNCTION

function createSquare(number) {
    
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    

    newSquare.addEventListener('click', function () {

        console.log(this.innerText);
        if(arrayNum.includes(arrayBomb)){
            this.classList.add('bomb')
            console.log(this)
        }
        else{
            this.classList.add('click')
        }
        
    })

    newSquare.innerHTML = number;
    
    return newSquare 
}

function getRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

