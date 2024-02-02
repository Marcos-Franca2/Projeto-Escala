function mostrarhorarios(dia) { // funcao que mostra os horarios cadastrados para o dia selecionado 
    window.diaselect = dia;

    let h1 = `<div class = "dia-semana"> <h3><b>Escala de ${dia}</b></h3> </div>`
    nomeDiaSelecionado = JSON.parse(localStorage.getItem(window.diaselect))
    horar = nomeDiaSelecionado.filter(x=> x.horaR) // separando os horarios de retorno cadastrados no mesmo local storage.
    horar.sort((a, b) => { //organizndo os horarios por ondem
        const horaA = a.horaR.split(':').map(Number);
        const horaB = b.horaR.split(':').map(Number);
      
        if (horaA[0] !== horaB[0]) {
          return horaA[0] - horaB[0];
        } else {
          return horaA[1] - horaB[1];
        }
      });
    let h2 = `<div class = "dia-semana"> <h3><b>Escala de Retorno ${dia}</b></h3> </div>`
      horar.forEach(element => {
        h2 += `<div class= "checkbox-retono">
    <input type="checkbox" class = "hora-retorno" id=${element.horaR}
    <div class = "hora" ><b>Horario: </b>${element.horaR} </div>
    </div>
    `
      })

    nomeDiaSelecionado = nomeDiaSelecionado.filter(x=> x.hora)// separando os horarios de ida dos de retorno 
    nomeDiaSelecionado.sort((a, b) => {
        const horaA = a.hora.split(':').map(Number);
        const horaB = b.hora.split(':').map(Number);
      
        if (horaA[0] !== horaB[0]) {
          return horaA[0] - horaB[0];
        } else {
          return horaA[1] - horaB[1];
        }
      });
    nomeDiaSelecionado.forEach(element => {
        h1 += `<div class= "checkbox-hora">
    <input type="checkbox" class = "hora-retorno" id=${element.hora}
    <div class = "hora" ><b>Horario: </b>${element.hora} </div>
    </div>
    `
    })

    document.getElementById('padrao-dia').innerHTML = h1;
    document.getElementById('retorno-dia').innerHTML = h2;
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


function cadatrarnovohorarioretono() { // funcao onde cadastra novos horarios nos local storages dependando dos dias selecionados
    let novaHora = document.getElementById('nova-hora').value
    if (novaHora === "" || undefined) { 
        return
    }
    if (diaselect === "Segunda-feira") { // diaselect e coletado da funcao mostrar horarios pois quando clicamos no dia o botao dretorna um valor para a funcao
        segundafeira.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(segundafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Terça-Feira") {
        tercafeira.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(tercafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Quarta-Feira") {
        quartafeira.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(quartafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Quinta-Feira") {
        quintafeira.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(quintafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Sexta-Feira") {
        sextafeira.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(sextafeira))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Sabado") {
        sabado.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(sabado))
        mostrarhorarios(diaselect)
    }
    if (diaselect === "Domingo") {
        domingo.push({ horaR: `${novaHora}` })
        localStorage.setItem(`${diaselect}`, JSON.stringify(domingo))
        mostrarhorarios(diaselect)
    }
    else {  
        return
    }
    
}


function apagarhorario(){ // funcao qua apaga horarios selecionado atravez das checkbox dos seu respctivos local storages 
    let horaselect =document.querySelectorAll(`input[class = "hora-retorno"]:checked`);
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