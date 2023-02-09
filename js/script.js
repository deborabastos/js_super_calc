function start(){
    var buttonCalculateImc = document.querySelector('#button-calculate')
    buttonCalculateImc.addEventListener('click', handleButtonClick)

    handleButtonClick();
}


function handleButtonClick() {
    var inputN1 = document.querySelector('#first-num')
    var inputN2 = document.querySelector('#second-num')
    var sumResult = document.querySelector('#sum-result')
    var subABResult = document.querySelector('#subAB-result')
    var subBAResult = document.querySelector('#subBA-result')

    var n1 = Number(inputN1.value);
    var n2 = Number(inputN2.value);

    var sum = calcSum(n1, n2);
    var subAB = calcSubAB(n1, n2);
    var subBA = calcSubBA(n1, n2);


    sumResult.textContent = sum;
    subABResult.textContent = subAB;
    subBAResult.textContent = subBA;
}

function calcSum(n1 ,n2){
    return (n1 + n2);
}

function calcSubAB(n1 ,n2){
    return (n1 - n2);
}

function calcSubBA(n1 ,n2){
    return (n2 - n1);
}

start()