function calcular(){
    let numero = document.getElementById('numbers')
    let resultado = document.getElementById('result')
    numero = Number(numero.value)
    if(numero >= 0){
        resultado.innerText = ''
        for(let i=0; i<=10; i++){
            resultado.innerText += `${numero} X ${i} = ${i*numero}\n`
        }
    }else{
        window.alert('digite um número valido')
    }
}