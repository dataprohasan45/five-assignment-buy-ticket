
function buttonNameSend(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'A1';

    
}

function priceSend(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function SeatName(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';
    
}

function buttonColor(elementId){
    const button = document.getElementById(elementId);
    const changeColor = button.style.backgroundColor = 'green';
    
}
// second button
function secondButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'A2';
    
}

function secondPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function secondSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';
    
}
// third button
function thirdButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'A3';
    
}

function thirdPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function thirdSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}

// four button
function fourButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'A4';
    
}

function fourPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function fourSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}

// five button
function fiveButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'B1';
    
}

function fivePrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function fiveSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}
// six button
function sixButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'B2';
    
}

function sixPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function sixSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}
// seven button
function sevenButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'B3';
    
}

function sevenPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function sevenSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}
// eight button

function eightButton(elementId){
    const element = document.getElementById(elementId);
    const textInner = element.innerText = 'B4';
    
}

function eightPrice(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = '550';
    const convertText = parseInt(priceChange);
    console.log(convertText);
}

function eightSeat(elementId){
    const element = document.getElementById(elementId);
    const priceChange = element.innerText = 'Economoy';


}

// input data
document.getElementById('input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const disableButton = document.getElementById('next-btn');
    if(text === '1' || text === '2' || text === '3' || text === '4' || text === '5' || text === '6' || text ===  '0' || text === '12' || text === '123' || text === "7" || text === "8" || text === "9"|| text === "1234" || text === "12345" || text === "67890" || text === "0123456789"){
        disableButton.removeAttribute('disabled');
        disableButton.style.backgroundColor = 'green';
    }
    else{
        disableButton.setAttribute('disabled', true);
        disableButton.style.backgroundColor = 'white';
        
    }
})

function inputBttonShow(elementId){
    const buttonShow = document.getElementById(elementId);
    const buttonSHOW = buttonShow.removeAttribute('disabled');
    
} 

// modal show

function modalPlaceShow(elementId){
    const modalPlace = document.getElementById(elementId);
 modalPlace.classList.remove('hidden');   
}