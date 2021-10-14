var num = document.querySelector('#num');
var result = document.querySelector('#result');
var calcButton = document.querySelector('#calcButton');
function calcVolume(num) {
    return num * 0.3048;
}
calcButton.addEventListener('click', function (event) {
    var res = calcVolume(+num.value) + " méter";
    result.value = String(res);
});
