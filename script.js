//Generate button and display handle

let generateDisplay = document.getElementById('generateDisplay');
let generateBtn = document.getElementById('generateBtn');
let stringGen = '';

generateBtn.addEventListener('click', function(){
    for (let i = 0; i < 1; i++) {
        let number = Math.random()*10000;
        let generateNumber = Math.round(number);
        stringGen = generateNumber;
        generateDisplay.value = stringGen;
        
    }
})
// Calculator Button and display handle

let display = document.getElementById('display');
let calcBtn = document.getElementsByClassName('button');
let string = '';

let calcBtnArray = Array.from(calcBtn);

calcBtnArray.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.innerHTML == 'x'){
            string = string.substring(0, string.length - 1);
            display.value = string;
        }else if(e.target.innerHTML == 'C'){
            string = '';
            display.value = string;
        }else{string += e.target.innerHTML
            display.value = string;}
    })
})

//pin match verify handle

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
    document.getElementById('turnCheck').style.display = 'none';

    if(display.value == generateDisplay.value){
        document.getElementById('match').style.display = 'block';
        document.getElementById('noMatch').style.display = 'none';
        document.getElementById('lastTurn').style.display = 'none';
    }else{
        document.getElementById('noMatch').style.display = 'block';
        document.getElementById('match').style.display = 'none';
        document.getElementById('lastTurn').style.display = 'block';
    }
})

