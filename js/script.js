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
    var multResult = document.querySelector('#mult-result')
    var divABResult = document.querySelector('#divAB-result')
    var divBAResult = document.querySelector('#divBA-result')
    var expABResult = document.querySelector('#expAB-result')
    var expBAResult = document.querySelector('#expBA-result')
    var sqrtAResult = document.querySelector('#sqrtA-result')
    var sqrtBResult = document.querySelector('#sqrtB-result')


    var n1 = Number(inputN1.value);
    var n2 = Number(inputN2.value);

    var sum = calcSum(n1, n2);
    var subAB = calcSub(n1, n2);
    var subBA = calcSub(n2, n1);
    var mult = calcMult(n1, n2);
    var divAB = calcDiv(n1, n2);
    var divBA = calcDiv(n2, n1);
    var expAB = calcExp(n1, n2);
    var expBA = calcExp(n2, n1);
    var sqrtA = calcSqrt(n1);
    var sqrtB = calcSqrt(n2);

    sumResult.textContent = sum;
    subABResult.textContent = subAB;
    subBAResult.textContent = subBA;
    multResult.textContent = mult;
    divABResult.textContent = divAB;
    divBAResult.textContent = divBA;
    expABResult.textContent = expAB;
    expBAResult.textContent = expBA;
    sqrtAResult.textContent = sqrtA;
    sqrtBResult.textContent = sqrtB;
}

function calcSum(n1, n2){
    return (n1 + n2);
}

function calcSub(n1, n2){
    return (n1 - n2);
}

function calcMult(n1, n2){
    return (n1 * n2);
}

function calcDiv(n1, n2){
    return (n1 / n2);
}

function calcExp(n1, n2){
    return Math.pow(n1, n2);
}


function calcSqrt(n){
    return Math.sqrt(n);
}

start()