function mostrarhorarios(dia) {
    window.diaselect = dia

    let h1 = `<div class = "diadasemana"> Escala de ${dia} </div>`
    if (dia === "Segunda-feira") {

        segundafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1
    }
    if (dia === "Terça-Feira") {

        tercafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    if (dia === "Quarta-Feira") {

        quartafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    if (dia === "Quinta-Feira") {

        quintafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    if (dia === "Sexta-Feira") {

        sextafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    if (dia === "Sabado") {

        sabado.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    if (dia === "Domingo") {

        domingo.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        })
        document.getElementById('padrao-dia').innerHTML = h1

    }
    else {
        document.getElementById('padrao-dia').innerHTML = h1
    }
}

function cadatrarnovohorario() {
    let novaHora = document.getElementById('nova-hora').value
    if (novaHora === "" || undefined) {
        return
    }
    if (diaselect === "Segunda-feira") {
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

function apagarhorario(){
    let horaselect =document.querySelectorAll(`input[class = "teste1"]:checked`);
    for (var i = 0 ; i<horaselect.length; i++){
        checkbox = horaselect[i];
        if(checkbox.checked){
            checkbox.parentNode.remove(checkbox);
        }
    }
}