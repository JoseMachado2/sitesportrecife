function calcular() {

    var nacio = window.document.getElementById('country').value.toUpperCase()
    var res = window.document.getElementById('resul')
    var nick = window.document.getElementById('name').value



    if (nacio == 'SPORT') {
        res.innerText = `Olá ${nick}, tu é torcedor do maior do nordeste!`
        res.style.backgroundColor = 'red'

    }

    else {
        if (nacio == 'NAUTICO') {
            res.innerText = `Porraa, ${nick}... tu é uma torcedora do ${nacio}, sua Barbie safada!! `
            res.style.backgroundColor = 'pink'
            

        }


        else 
        if (nacio== 'SANTA CRUZ')
        {

            res.innerText = ' SERIE D!!!!!!!!!!!! '
        }

        else 
        if (nacio=='RETRO')
        { 
            res.innerText = ' UNIBRA é o caralho, aqui é NASSAU'

        } else {
            res.innerHTML ='Você é um misto, vergonha do nordeste'
        }
    }


    }