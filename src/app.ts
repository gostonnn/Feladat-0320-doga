const radius = document.querySelector('#radius') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLInputElement;

const calcButton = document.querySelector('#calcButton');

function calcVolume(radius: number):number{

    return radius * 0.3048;

}

calcButton.addEventListener('click', event => {

    let res = calcVolume(+radius.value)+" méter";
    result.value = String(res);
})