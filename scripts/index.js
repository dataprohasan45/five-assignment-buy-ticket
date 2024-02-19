
const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
        while( count > 4){
            return count;
        }
        setInnerText('default-count', count);



    }); 
}



let left = 8;
for(const seat of allBtn){
    seat.addEventListener('click', function(e){
        left = left - 1;


        setInnerText('seat-left', left);
    })
}

let total = 0;
for(const pay of allBtn){
    pay.addEventListener('click', function(e){
        total = total + 550;

        setInnerText('total-tk', total);
        setInnerText('total-pay', total);
    })
}




function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


// coupon





function buttonClick(){
    buttonNameSend('first-seat');
    SeatName('economoy');
    priceSend('price-seat');
    buttonColor('A1');
    inputBttonShow('input');
}

function secondClick(){
    secondButton('second-seat');
    secondSeat('economoy2');
    secondPrice('price-seat2');
    buttonColor('A2');
    inputBttonShow('input');
}

function thirdClick(){
    thirdButton('third-seat');
    thirdSeat('economoy3');
    thirdPrice('price-seat3');
    buttonColor('A3');
    inputBttonShow('input');
}

function fourClick(){
    fourButton('four-seat');
    fourSeat('economoy4');
    fourPrice('price-seat4');
    buttonColor('A4');
    inputBttonShow('input');
}

function fiveClick(){
     fiveButton('five-seat');
     fiveSeat('economoy5');
     fivePrice('price-seat5');
     buttonColor('B1');
     inputBttonShow('input');
}

function sixClick(){
    sixButton('six-seat');
    sixSeat('economoy6');
    sixPrice('price-seat6');
    buttonColor('B2');
    inputBttonShow('input');
}

function sevenClick(){
    sevenButton('seven-seat');
    sevenSeat('economoy7');
    sevenPrice('price-seat7');
    buttonColor('B3');
    inputBttonShow('input');
}

function eightClick(){
    eightButton('eight-seat');
    eightSeat('economoy8');
    eightPrice('price-seat8');
    buttonColor('B4');
    inputBttonShow('input');
}

function modalShow(){
    modalPlaceShow('modal');
}



