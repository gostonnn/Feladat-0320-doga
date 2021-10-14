var radius = document.querySelector('#radius');
var result = document.querySelector('#result');
var calcButton = document.querySelector('#calcButton');
function calcVolume(radius) {
    return radius * 0.3048;
}
calcButton.addEventListener('click', function (event) {
    var res = calcVolume(+radius.value) + " méter";
    result.value = String(res);
});
