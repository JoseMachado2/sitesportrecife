function totalizar() {
    var type = window.document.getElementById('tipe')
    var many = window.document.getElementById('quant')
    var resul = window.document.getElementById('res')

    var t1 = Number(type.value)
    var q1 = Number(many.value)

    switch (t1) {
        case 1:
            var s = 50 * q1
            res.innerHTML = s
            break;
        case 2:
            var s = 30 * q1
            res.innerHTML = s
            break;
            case 3:
                var s = 30 * q1
                res.innerHTML = s
                break;
            case 4: 
            var s = 10 * q1
                    res.innerHTML = s
                    break;
            case 5:
                var s = 20 * q1
                        res.innerHTML = s
                        break;
            case 6:
                var s = 70 * q1
                            res.innerHTML = s
                            break;
            case 7:
                var s = 65 * q1
                res.innerHTML = s
                break;
            default:
                res.innerHTML = 'ERRO '
                res.style.backgroundColor = 'red'


    }




}