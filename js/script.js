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
    var factAResult = document.querySelector('#factA-result')
    var factBResult = document.querySelector('#factB-result')
    var percABResult = document.querySelector('#percAB-result')
    var percBAResult = document.querySelector('#percBA-result')
    var avgResult = document.querySelector('#avg-result')

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
    var factA = calcFact(n1);
    var factB = calcFact(n2);
    var percAB = calcPerc(n1, n2)
    var percBA = calcPerc(n2, n1)
    var avgAB = calcAvg(n1, n2)

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
    factAResult.textContent = factA;
    factBResult.textContent = factB;
    percABResult.textContent = percAB;
    percBAResult.textContent = percBA;
    avgResult.textContent = avgAB;
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

function calcFact(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * calcFact(num - 1));
    }
}

function calcPerc(n1, n2){
    return ((1 + ((n2 - n1)/n1))*100)
}

function calcAvg(n1, n2){
    return ((n1+n2)/2)
}

start()