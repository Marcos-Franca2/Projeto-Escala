diaatual()
function diaatual(){//fazer o input date mostrar a escala conforme o dia do computador
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    document.getElementById("date").value = dataAtual
    var date = document.getElementById("date").value
    var date1 = new Date(`${date}`)
    date2 = date1.getDay()
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
        segundafeira.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        segundafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 1) {/*Terca-feira*/
        tercafeira.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        tercafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 2) {/*Quarta-feira*/
        quartafeira.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        quartafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 3) {/*Quinta-feira*/
        quintafeira.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        quintafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 4) {/*Sexta-feira*/
        sextafeira.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        sextafeira.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 5) {/*Sabado*/
        sabado.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        sabado.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    if (date2 === 6) {/*Domingo*/
        domingo.sort((a, b) => Number(a.hora) - Number(b.hora)) // Preencher a caixa de horarios com os horarios cadastrados

        domingo.forEach(element => {
            h1 += `<div class= "conteiner">
        <input type="checkbox" class = "teste1" id=${element.hora}
        <div class = "hora" ><b>Horario: </b>${element.hora} </div>
        </div>
        `
        });

        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    else {
        document.getElementById('horariosNEscalados').innerHTML = h1
    }
}


function escalar() {
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

    var horarioescalado = [(String(radiobox) + ' = ' + String(moto) + '<br>')]

    document.getElementById('horarioe').innerHTML += horarioescalado // Listando motoristas Escalados

    let idselect = [] // remover os motoristas ja escalados
    checkboxes.forEach((checkbox) => {
        idselect.push(checkbox.id);
    });
    var idclean = idselect.pop()
    console.log(idclean);
    var index = listaMotorista.map(x => {
        return x.matricula;
    }).indexOf(idclean);

    listaMotorista.splice(index, 1);
    // removido motoristas escalados


    let horaselect = [] //remover horarios escalados 
    radioselect.forEach((checkbox) => {
        horaselect.push(checkbox.id);
    });
    var horaCerta = horaselect.pop()
    var horarioselecionado = segundafeira.map(x => {
        return x.hora;
    }).indexOf(horaCerta);
    console.log(horarioselecionado);

    segundafeira.splice(horarioselecionado, 1);
    // removido horarios escalados 


    listarMotoristasEscalas() //listar novamente os motoristas porem agora removendo os motoristas ja escalados 

}
function myFunction() { //Coletando dia da semana selecionado
    date = document.getElementById("date").value
    date1 = new Date(`${date}`)
    date2 = date1.getDay()
    console.log(date2)
    listarMotoristasEscalas()
}
