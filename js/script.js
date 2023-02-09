function start(){
    var buttonCalculateImc = document.querySelector('#button-calculate')
    buttonCalculateImc.addEventListener('click', handleButtonClick)

    handleButtonClick();
}


function handleButtonClick() {
    var inputN1 = document.querySelector('#first-num')
    var inputN2 = document.querySelector('#second-num')
    var sumResult = document.querySelector('#sum-result')

    var n1 = Number(inputN1.value);
    var n2 = Number(inputN2.value);

    var sum = calcSum(n1, n2);

    sumResult.textContent = sum;
}

function calcSum(n1 ,n2){
    return n1 + n2;
}

start()