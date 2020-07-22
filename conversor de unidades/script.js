var dist = window.document.getElementsByName('dist')
var res = window.document.getElementById('res')
var numero = window.document.getElementById('num')

function calcular (){

    var n = Number(numero.value)

    if(n == 0){
        window.alert('ERRO. Por favor, digite um número.')
    }else if(dist[0].checked){
        // km para m
        res.innerHTML = `Resultado: ${n * 1000} m.`
   
    }else if(dist[1].checked){
        // m para km
        res.innerHTML= `Resultado: ${n / 1000} Km`
    
    }else if(dist[2].checked){
        // milha para km
        res.innerHTML= `Resultado: ${n * 1.609} km`

    }else if(dist[3].checked){
        // km para milha
        res.innerHTML= `Resultado ${n / 1.609} milhas`

    }else if(dist[4].checked){
        // jarda para m
        res.innerHTML = `Resultado: ${n / 1.094} m`

    }else if(dist[5].checked){
        // m para jarda
        res.innerHTML = `Resultado: ${n * 1.094} jarda`
    }
    
}