const num = document.querySelector('#num') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLInputElement;

const calcButton = document.querySelector('#calcButton');

function calcVolume(num: number):number{

    return num * 0.3048;

}

calcButton.addEventListener('click', event => {

    let res = calcVolume(+num.value)+" méter";
    result.value = String(res);
})