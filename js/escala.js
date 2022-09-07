diaatual()
function diaatual() {//fazer o input date mostrar a escala conforme o dia do computador
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    document.getElementById("date").value = dataAtual
    var date = document.getElementById("date").value
    var date1 = new Date(`${date}`)
    date2 = date1.getDay()
    console.log(date2)
    listarMotoristasEscalas()

}

function myFunction() { //Coletando dia da semana selecionado
    date = document.getElementById("date").value
    date1 = new Date(`${date}`)
    date2 = date1.getDay()
    console.log(date2)
    listarMotoristasEscalas()
}


function listarMotoristasEscalas() {
    listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula)) // Preencher a caixa com os motoristas cadastrados 
    let htmlLista = ''
    listaMotorista.forEach(element => {
        htmlLista += `
        <div class = "container">
            <input type="checkbox" class = "teste" id=${element.matricula} name=${element.nomeMotorista}>
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${element.nomeMotorista} </div>
        </div>
        `
        document.getElementById('listaMotorista').innerHTML = htmlLista
        
    })
    let h1 = ''
    // prenchendo horarios de acordo com o dia da semana escolhido
    if (date2 === 0) {/*Segunda-feira*/
        window.dia = segundafeira
    }
    if (date2 === 1) {/*Terca-feira*/
        window.dia = tercafeira
    }
    if (date2 === 2) {/*Quarta-feira*/
        window.dia = quartafeira
    }
    if (date2 === 3) {/*Quinta-feira*/
        window.dia = quintafeira
    }
    if (date2 === 4) {/*Sexta-feira*/
        window.dia = sextafeira
    }
    if (date2 === 5) {/*Sabado*/
        window.dia = sabado
    }
    if (date2 === 6) {/*Domingo*/
        window.dia = domingo
    }
    else {
        document.getElementById('horariosNEscalados').innerHTML = h1
    }

    window.dia.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

    window.dia.forEach(element => {
        h1 += `<div class= "conteiner">
    <input type="checkbox" class = "teste1" id=${element.hora}
    <div class = "hora" ><b>Horario: </b>${element.hora} </div>
    </div>
    `
    });

    document.getElementById('horariosNEscalados').innerHTML = h1
}


function escalarex() {
    var horaex = document.getElementById('hora').value
    var tipoex = document.getElementById('tipoex').value
    if (horaex == "" || tipoex == ""){
        let horaExtra = ''
        listahorariosex.forEach(element => {
            horaExtra += `<div class= "conteiner">
            <input type="checkbox" class = "horaex" id=${element.hora} name=${element.tipo}>
            <div class = "horaex2" ><b>Horario: </b>${element.hora} <br>
            <b> Tipo Escala: </b> ${element.tipo} </div>
            </div>
            `
        })
        document.getElementById('horariosExNEscalados').innerHTML = horaExtra
    }

   else{ listahorariosex.push({ hora: `${horaex}`, tipo: `${tipoex}` })
    localStorage.setItem(`listahorariosex`, JSON.stringify(listahorariosex))

    let horaExtra = ''
    listahorariosex.forEach(element => {
        horaExtra += `<div class= "conteiner">
        <input type="checkbox" class = "horaex" id=${element.hora} name=${element.tipo}>
        <div class = "horaex2" ><b>Horario: </b>${element.hora} </div>
        <div class = "tipoe" ><b> Tipo Escala: </b> ${element.tipo} </div>
        </div>
        `
    })
    document.getElementById('horariosExNEscalados').innerHTML = horaExtra
   }

}

function escalar() {
    let horariox = document.querySelectorAll(`input[class = "horaex"]:checked`); // localizar os horarios extras selecionados 
    let horax = []
    horariox.forEach((checkbox) => {
        horax.push(checkbox.id +`  `+ checkbox.name);
    })


    let radioselect = document.querySelectorAll(`input[class = "teste1"]:checked`); //localizar os horarios selecionados
    let radiobox = []
    radioselect.forEach((checkbox) => {
        radiobox.push(checkbox.id);
    });

    let checkboxes = document.querySelectorAll(`input[class = "teste"]:checked`); // localizar os motoristas selecionados 
    let moto = []
    checkboxes.forEach((checkbox) => {
        moto.push(checkbox.id + ` ` + checkbox.name);
    });
    console.log(moto)
// definindo qual horario foi selecionado (horario EXTRAORDINADO ou nao )
    if (horax.length == 1) {
        var horarioescalado = [(String(horax) + ' = ' + String(moto) + '<br>')]
    }
    else {
        var horarioescalado = [(String(radiobox) + ' = ' + String(moto) + '<br>')]
    }




    document.getElementById('horarioe').innerHTML += horarioescalado // Listando motoristas Escalados

    let idselect = [] // remover os motoristas ja escalados
    checkboxes.forEach((checkbox) => {
        idselect.push(checkbox.id);
    });
    var idclean = idselect.pop()
    var index = listaMotorista.map(x => {
        return x.matricula;
    }).indexOf(idclean);

    listaMotorista.splice(index, 1);
    // removido motoristas escalados


    let horaselect = [] //remover horarios escalados 
    if(horax.length == 1){
        horariox.forEach((checkbox) => {
            horaselect.push(checkbox.id);
        });
        var horaCerta = horaselect.pop()
    var horarioselecionado = listahorariosex.map(x => {
        return x.hora;
    }).indexOf(horaCerta);


    listahorariosex.splice(horarioselecionado, 1);

    }
   else{ radioselect.forEach((checkbox) => {
        horaselect.push(checkbox.id);
    });

    var horaCerta = horaselect.pop()
    var horarioselecionado = window.dia.map(x => {
        return x.hora;
    }).indexOf(horaCerta);


    window.dia.splice(horarioselecionado, 1);
}
    // removido horarios escalados 


    // remover horarios extras escalados 
     let horaselect2 =document.querySelectorAll(`input[class = "horaex"]:checked`)
  
    for (var i = 0 ; i<horaselect2.length; i++){
    checkbox2 = horaselect2[i]
    if(checkbox2.checked){
        checkbox2.parentNode.remove(checkbox2);
        horaexselect = JSON.parse(localStorage.getItem("listahorariosex"))
        horaexselect = horaexselect.filter(x => x.hora != horaselect2[i].id)
        localStorage.setItem("listahorariosex", JSON.stringify(horaexselect))
        
    }
}
    
    escalarex()
    listarMotoristasEscalas() //listar novamente os motoristas porem agora removendo os motoristas ja escalados 

}

