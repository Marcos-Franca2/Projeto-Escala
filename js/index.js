
listarMotoristas()

function cadastrarMotorista(){ // funcao criada para o cadastro do novos motoristas 
    let nomeMotorista = document.getElementById('nome-motorista').value.trim()
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
   
    let objMotirista = {nomeMotorista: nomeMotorista.toUpperCase(), matricula: matricula};

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
       
        var exibir = element.nomeMotorista.split("-").join(" ")
        htmlLista += `
        <div class = "container">
        <input type="checkbox" class = "select-moto" id = ${element.matricula} name = ${element.name}>
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${exibir} </div>
        </input>    
        </div>
        ` 
        
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
}
console.log(listaMotorista)

function apagarmotorista(){ // funcao qua apaga horarios selecionado atravez das checkbox dos seu respctivos local storages 
    let motoselect =document.querySelectorAll(`input[class = "select-moto"]:checked`);
    for (var i = 0 ; i<motoselect.length; i++){
        checkbox = motoselect[i];
        if(checkbox.checked){
            checkbox.parentNode.remove(checkbox);
            listaMotorista = JSON.parse(localStorage.getItem("listaMotorista"));
            listaMotorista = listaMotorista.filter(x => x.matricula != motoselect[i].id);
            localStorage.setItem("listaMotorista", JSON.stringify(listaMotorista));
            
        }
    }
}