listarMotoristasEscalas()

function listarMotoristasEscalas() {
    listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula))
    let htmlLista = ''
    listaMotorista.forEach(element => {
        htmlLista += `
        <div class = "container">
            <input type="checkbox" class = "teste" id=${element.matricula} name=${element.nomeMotorista}>
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${element.nomeMotorista} </div>
        </div>
        ` 
    }); 
    document.getElementById('listaMotorista').innerHTML = htmlLista
    console.log(listaMotorista)

}
function escalar(){
    let radioselect = document.querySelectorAll(`input[class = "radio"]:checked`);
    let radiobox = []
    radioselect.forEach((checkbox) => {
            radiobox.push(checkbox.value);
    }); 
   
    let checkboxes = document.querySelectorAll(`input[class = "teste"]:checked`);
    let moto = []
    checkboxes.forEach((checkbox) => {
            moto.push(checkbox.id + ` ` + checkbox.name);
    });

    var horarioescalado = [(String(radiobox) + ' = ' + String(moto) + '<br>')]

    document.getElementById('horarioe').innerHTML += horarioescalado 

    let idselect = [] 
    checkboxes.forEach((checkbox) => {
        idselect.push(checkbox.id);
        });
        var idclean = idselect.pop()
        console.log(idclean);

        var index = listaMotorista.map(x => {
            return x.matricula;
          }).indexOf(idclean);
          console.log(index);
          listaMotorista.splice(index, 1);
          console.log(listaMotorista);

 listarMotoristasEscalas()
  //  var time = document.querySelector('.radio:checked').value;
        
}
