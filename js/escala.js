listarMotoristasEscalas()

function listarMotoristasEscalas() {
    listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula))
    let htmlLista = ''
    listaMotorista.forEach(element => {
        htmlLista += `
        <div class = "container">
            <input type="checkbox" id=${element.matricula} name=${element.matricula}>
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${element.nomeMotorista} </div>
        </div>
        ` 
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
}
