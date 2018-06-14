var botaoConverter = document.getElementById('botaoConverter');
// var valorBitcoin = 0.00002972;
var valorBitcoin = 0.0000366;

function convertValue(arg1, arg2) {
    return arg1 * arg2;
};

botaoConverter.addEventListener('click', function() {
    var valorEmReais = document.getElementById('valorEmReais').value;
        valorEmReais = parseFloat(valorEmReais);

    var result = convertValue(valorEmReais, valorBitcoin);
    document.getElementById('valorEmBitcoins').innerHTML = result;
});

