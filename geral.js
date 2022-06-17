
var listaMotorista = localStorage.getItem("listaMotorista")
if(listaMotorista == undefined || listaMotorista == ""){
    listaMotorista = []
}
else {
    listaMotorista = JSON.parse(listaMotorista)
}
listarMotoristas()
function cadastrarMotorista(){
    let nomeMotorista = document.getElementById('nome-motorista').value
    let matricula = document.getElementById('matricula').value
    let existe = listaMotorista.filter(x => x.matricula == matricula)
    if(existe.length > 0)
    {
        return
    }
    let objMotirista = {nomeMotorista: nomeMotorista, matricula: matricula}
    listaMotorista.push(objMotirista);
    localStorage.setItem("listaMotorista", JSON.stringify(listaMotorista))
    listarMotoristas()
}

function listarMotoristas() {
    let htmlLista = ''
    listaMotorista.forEach(element => {
        htmlLista += `
        <hr>
        <div><b>matricula: </b>${element.matricula} </div>
        <div><b>Nome: </b>${element.nomeMotorista} </div>
        ` 
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
}