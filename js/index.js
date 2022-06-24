
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
    listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula))
    let htmlLista = ''
    listaMotorista.forEach(element => {
        htmlLista += `
        <div class = "container">
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${element.nomeMotorista} </div>
        </div>
        ` 
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
}