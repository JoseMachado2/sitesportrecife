function calcular() {

    var nacio = window.document.getElementById('country').value.toUpperCase()
    var res = window.document.getElementById('resul')
    var nick = window.document.getElementById('name').value



    if (nacio == 'SPORT') {
        res.innerText = `Olá ${nick}, você é torcedor do maior do nordeste!`
        res.style.backgroundColor = 'red'

    }

    else {
        if (nacio == 'NAUTICO') {
            res.innerText = `Poxa, ${nick}... torcer pro ${nacio}?, você gosta de sofrer `
            res.style.backgroundColor = 'pink'
            res.style.marginRight = "50%"


        }


        else 
        if (nacio== 'SANTA CRUZ')
        {

            res.innerText = ' SERIE D!!!!!!!!!!!! '
            res.style.marginRight = "80%"
        }

        else 
        if (nacio=='RETRO')
        { 
            res.innerText = ' UNIBRA? aqui é NASSAU'

        } else {
            res.innerHTML ='Você é um misto, vergonha do nordeste'
        }
    }


    }