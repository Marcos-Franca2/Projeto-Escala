
listarMotoristas()

function cadastrarMotorista(){ // funcao criada para o cadastro do novos motoristas 
    let nomeMotorista = document.getElementById('nome-motorista').value
    let matricula = document.getElementById('matricula').value
    let existe = listaMotorista.filter(x => x.matricula == matricula)
    if (nomeMotorista.trim() === "" || matricula.trim() === "")
    return false
{
    if(existe.length > 0)
    
    {
        alert("Matricula já cadastrada. Verifique e tente novamente.")
        return
    }
   
    let objMotirista = {nomeMotorista: nomeMotorista, matricula: matricula};

        objMotirista = { nomeMotorista: objMotirista.nomeMotorista.replace(/ /g, "-"), matricula: matricula};
        console.log(objMotirista);
    listaMotorista.push(objMotirista);
    localStorage.setItem("listaMotorista", JSON.stringify(listaMotorista));
    listarMotoristas()  ;
}
}

function listarMotoristas() { // funcao que exibe os motoristas na tela do usuario
    listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula))
    let htmlLista = ''
    listaMotorista.forEach(element => {
       
        if (element.nomeMotorista.includes("-")){
            var exibir = element.nomeMotorista.replace("-", " ")
 
        } 
    
        htmlLista += `
        <div class = "container">
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${exibir} </div>
        </div>
        ` 
        
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
}
console.log(listaMotorista)