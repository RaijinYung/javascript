function tabuada() {
    var xNumber = Number(document.getElementById('xNumber').value)
    var res = document.getElementById('res')

    if (xNumber.lenght == 0) {
        window.alert('Error')
    } else {
        res.innerHTML = ''

        for (i = 1; i <= 10; i++) {
            var resultado = xNumber * i;
            var linha = `${xNumber} x ${i} = ${resultado}<br>`;
            res.innerHTML += linha;
        }
    }
}