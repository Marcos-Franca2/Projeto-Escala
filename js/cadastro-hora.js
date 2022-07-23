

function mostrarhorarios(dia){
    let h1 = ''
    if (dia === "Segunda-feira"){

    segundafeira.forEach(element => {
        h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
    })
    document.getElementById('padrao-dia').innerHTML = h1
}else{
    document.getElementById('padrao-dia').innerHTML = h1
}

}

function cadatrarnovohorario(){
    let novaHora = document.getElementById('nova-hora').value
    segundafeira.push({hora: `${novaHora}`})
    localStorage.setItem("Segunda-feira", JSON.stringify(segundafeira))
    mostrarhorarios()

}