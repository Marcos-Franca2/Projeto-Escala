function mostrarhorarios(dia) { // funcao que mostra os horarios cadastrados para o dia selecionado 
    window.diaselect = dia

    let h1 = `<div class = "diadasemana"> <h3><b>Escala de ${dia}</b></h3> </div>`
    nomeDiaSelecionado = JSON.parse(localStorage.getItem(window.diaselect))
    nomeDiaSelecionado.forEach(element => {
        h1 += `<div class= "test1">
    <input type="checkbox" class = "teste1" id=${element.hora}
    <div class = "hora" ><b>Horario: </b>${element.hora} </div>
    </div>
    `
    })

    document.getElementById('padrao-dia').innerHTML = h1

}

function cadatrarnovohorario() { // funcao onde cadastra novos horarios nos local storages dependando dos dias selecionados
    let novaHora = document.getElementById('nova-hora').value
    if (novaHora === "" || undefined) { 
        return
    }
    if (diaselect === "Segunda-feira") { // diaselect e coletado da funcao mostrar horarios pois quando clicamos no dia o botao dretorna um valor para a funcao
        segundafeira.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(segundafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Terça-Feira") {
        tercafeira.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(tercafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Quarta-Feira") {
        quartafeira.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(quartafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Quinta-Feira") {
        quintafeira.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(quintafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Sexta-Feira") {
        sextafeira.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(sextafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Sabado") {
        sabado.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(sabado))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Domingo") {
        domingo.push({ hora: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(domingo))
        mostrarhorarios(diaselect)
    }
    else {  
        return
    }
    
}

function apagarhorario(){ // funcao qua apaga horarios selecionado atravez das checkbox dos seu respctivos local storages 
    let horaselect =document.querySelectorAll(`input[class = "teste1"]:checked`);
    for (var i = 0 ; i<horaselect.length; i++){
        checkbox = horaselect[i];
        if(checkbox.checked){
            checkbox.parentNode.remove(checkbox);
            nomeDiaSelecionado = JSON.parse(localStorage.getItem(window.diaselect))
            nomeDiaSelecionado = nomeDiaSelecionado.filter(x => x.hora != horaselect[i].id)
            localStorage.setItem(window.diaselect, JSON.stringify(nomeDiaSelecionado))
            
        }
    }
}