function totalizar() {
    var type = window.document.getElementById('tipe')
    var many = window.document.getElementById('quant')
    var resul = window.document.getElementById('res')

    var t1 = Number(type.value)
    var q1 = Number(many.value)


    if (t1 == 1) {

        var s = 50 * q1
        res.innerHTML = s

    }
    else {
        if (t1 == 2) {
            var s = 30 * q1
            res.innerHTML = s

        } else {
            if (t1 == 3) {
                var s = 30 * q1
                res.innerHTML = s


            } else {
                if (t1 == 4) {
                    var s = 10 * q1
                    res.innerHTML = s

                }else { 
                    if (t1 == 5) {
                        var s = 20 * q1
                        res.innerHTML = s


                    } else {
                        if (t1 == 6) {
                            var s = 70 * q1
                            res.innerHTML = s

                        } else {
                            if (t1 == 7) {
                                var s = 65 * q1
                                res.innerHTML = s

                            } else {
                                res.innerHTML = 'ERRO '
                                res.style.backgroundColor = 'red'
                            }
                        }
                    }
                }
            } 
        }
    } 


}
    
   