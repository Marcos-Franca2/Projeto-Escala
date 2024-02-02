document.addEventListener('DOMContentLoaded', function () {
    var inputDate = document.getElementById('date');

    // Obter a data atual no formato YYYY-MM-DD
    var dataAtual = new Date().toISOString().split('T')[0];

    // Definir o valor do input para a data atual
    inputDate.value = dataAtual;

    colectDay()
});

escalarhoraextra()
horariosexstand = []

function colectDay() { //Coletando dia da semana selecionado
    date = document.getElementById("date").value
    date1 = new Date(`${date}`)
    date2 = date1.getDay()
    listarMotoristasEscalas()
}


function listarMotoristasEscalas() {
    if (listaMotorista.length === 0) {
        let htmlLista = '';

        document.getElementById('listaMotorista').innerHTML = htmlLista
    }
    else {


        listaMotorista.sort((a, b) => Number(a.matricula) - Number(b.matricula)) // Preencher a caixa com os motoristas cadastrados os organizando por matricula
        let htmlLista = ''
        listaMotorista.forEach(element => {

            element.nomeMotorista.includes("-")
            var basic = element.nomeMotorista.split("-").join(" ")
            htmlLista += `
            <div class = "container">
                <input type="checkbox" class = "motorista-select" id=${element.matricula} name=${element.nomeMotorista}>
                <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
                <div class = "namemot"><b>Nome: </b>${basic} </div>
            </div>
            `

            document.getElementById('listaMotorista').innerHTML = htmlLista

        })
    }

    let h1 = ''
    // prenchendo horarios de acordo com o dia da semana escolhido e armazanando a string em um scopo global para que possamos usar ela novamente na proxima tela
    // variavel date2 recebe um valor de 0 a 6 coletados atraves da funcao My function para mostrar o dia escolhido e o armazenar em uma variavel de nome unico para ser mais facil manusea-la
    if (date2 === 0) {/*Segunda-feira*/
        window.dia = segundafeira
        diadasemana = "SEGUNDA-FEIRA"
    }
    if (date2 === 1) {/*Terca-feira*/
        window.dia = tercafeira
        diadasemana = "TERÇA-FEIRA"
    }
    if (date2 === 2) {/*Quarta-feira*/
        window.dia = quartafeira
        diadasemana = "QUARTA-FEIRA"
    }
    if (date2 === 3) {/*Quinta-feira*/
        window.dia = quintafeira
        diadasemana = "QUINTA-FEIRA"
    }
    if (date2 === 4) {/*Sexta-feira*/
        window.dia = sextafeira
        diadasemana = "SEXTA-FEIRA"
    }
    if (date2 === 5) {/*Sabado*/
        window.dia = sabado
        diadasemana = "SABADO"
    }
    if (date2 === 6) {/*Domingo*/
        window.dia = domingo
        diadasemana = "DOMINGO"
    }
    else {
        document.getElementById('horariosNEscalados').innerHTML = h1
    }
    horaRet = window.dia.filter(x => x.horaR); // separando os horario de retorno dos comuns
    window.dia = window.dia.filter(x => x.hora); // Preencher a caixa de horarios com os horarios cadastrados
    window.dia.sort((a, b) => {
        const horaA = a.hora.split(':').map(Number);
        const horaB = b.hora.split(':').map(Number);

        if (horaA[0] !== horaB[0]) {
            return horaA[0] - horaB[0];
        } else {
            return horaA[1] - horaB[1];
        }
    });
    window.dia.forEach(element => { // para cada elemento dentro do local storage onde armazenamos as horas e feito uma pequena tag html para estilizar e adicionar uma nova checkbox 
        h1 += `<div class= "hora-disponivel">
    <input type="checkbox" class = "horario-disponivel" id=${element.hora}
    <div class = "hora" ><b>Horario: </b>${element.hora} </div>
    </div>
    `
    });
    let h2 = ""

    horaRet.forEach(element => { // para cada elemento dentro do local storage onde armazenamos as horas e feito uma pequena tag html para estilizar e adicionar uma nova checkbox 
        h2 += `<div class= "horario-retorno">
    <input type="checkbox" class = "checkbox-retornos" id=${element.horaR}
    <div class = "hora" ><b>Horario: </b>${element.horaR} </div>
    </div>
    `
    });
    document.getElementById('horariosderetorno').innerHTML = h2
    document.getElementById('horariosNEscalados').innerHTML = h1
}


function escalarhoraextra() { // funcao acionado atravez do botao escalar onde o objetivo dela e coletar as checkbox selecionadas dos horarios EXTRA adicionados manualmente para jogar em uma nova key do local storage 
    // existem duas keys novas que separam os horarios padroes dos dias que sao adicionados nao tela de cadastro de horas e uma para os horarios EXTRAS adicionados manualmente na hora de fazer a escala
    var horaex = document.getElementById('hora').value
    var tipoex = document.getElementById('tipoex').value.toUpperCase()
    if (horaex == "" || tipoex == "") {
        let horaExtra = ''
        listahorariosex.forEach(element => {
            horaExtra += `<div class= "style-checkbox">
            <input type="checkbox" class = "input-horaextra" id=${element.hora} name=${element.tipo}>
            <div class = "horaex2" ><b>Horario: </b>${element.hora} <br>
            <b> Tipo Escala: </b> ${element.tipo} </div>
            </div>
            `
        })
        document.getElementById('horariosExNEscalados').innerHTML = horaExtra
    }

    else {
        listahorariosex.push({ hora: `${horaex}`, tipo: `${tipoex}` })
        localStorage.setItem(`listahorariosex`, JSON.stringify(listahorariosex))

        let horaExtra = ''
        listahorariosex.forEach(element => {
            horaExtra += `<div class= "style-checkbox">
        <input type="checkbox" class = "input-horaextra" id=${element.hora} name=${element.tipo}>
        <div class = "horaex2" ><b>Horario: </b>${element.hora} </div>
        <div class = "tipoe" ><b> Tipo Escala: </b> ${element.tipo} </div>
        </div>
        `
        })
        document.getElementById('horariosExNEscalados').innerHTML = horaExtra
    }

}

function escalar() {  //funcao que coleta os dados de todas as checkbox selecionados sendo elas de horarios EXTRAS ou horarios Padroes
    let horariox = document.querySelectorAll(`input[class = "input-horaextra"]:checked`); // localizar os horarios extras selecionados 
    let horax = []
    let tag = []
    horariox.forEach((checkbox) => {
        horax.push(checkbox.id);
        tag.push(checkbox.name)
    })


    let radioselect = document.querySelectorAll(`input[class = "horario-disponivel"]:checked`); //localizar os horarios selecionados
    let radiobox = []
    radioselect.forEach((checkbox) => {
        radiobox.push(checkbox.id);
    });

    let horarioR = document.querySelectorAll(`input[class = "checkbox-retornos"]:checked`); //localizar os horarios selecionados
    let horaR = []
    horarioR.forEach((checkbox) => {
        horaR.push(checkbox.id);
    });


    let checkboxes = document.querySelectorAll(`input[class = "motorista-select"]:checked`); // localizar os motoristas selecionados 
    let moto = []
    checkboxes.forEach((element) => {
        var espaco = element.name.split("-").join(" ")
        moto.push(espaco);


    });
    if (horax.length != 0 && moto.length != 0 || radiobox.length != 0 && moto.length != 0) { // nao avancar caso o usuario nao tenha selecionado um horario e um motorista 
        // definindo qual horario foi selecionado (horario EXTRAORDINADO ou nao )
        if (horax.length == 1) {
            var horarioescalado = []
            var horaextra = String(horax)
            var tipoextra = String(tag)
            var motoristaextra = String(moto)


            horarioescalado += `<div class = "checkbox-escalados"> 
        <input type="checkbox" class = "horaescalad" id=${horaextra} name=${motoristaextra}>
        <label for=${horaextra}" class="btn">${horaextra} / ${tipoextra} = ${motoristaextra}</label>

        </div>`

            horariosexstand.push({ hora: `${horaextra}`, tipo: `${tipoextra}`, motorista: `${motoristaextra}` })
            localStorage.setItem(`horariosexstand`, JSON.stringify(horariosexstand))

            let horaselect2 = document.querySelectorAll(`input[class = "input-horaextra"]:checked`)

            for (var i = 0; i < horaselect2.length; i++) { // quando um horario e selecionado ele e temporariamente apagado da tela 
                checkbox2 = horaselect2[i]
                if (checkbox2.checked) {
                    checkbox2.parentNode.remove(checkbox2);
                    horaexselect = JSON.parse(localStorage.getItem("listahorariosex"))
                    horaexselect = horaexselect.filter(x => x.hora != horaselect2[i].id)
                    localStorage.setItem("listahorariosex", JSON.stringify(horaexselect))

                }
            }



        }
        else {
            var horarioescalado = []
            var horario = String(radiobox)
            var motorista = String(moto)
            var horarioretorno = String(horaR)
            if (horarioretorno !== "") {


                horarioescalado += `<div class = "escalados"> 
        <input type="checkbox" class = "horaescalad" id=${horario} name=${motorista}>
        <label for=${horario}" class="btn">${horario}  = ${motorista} (retono ${horarioretorno})</label>


     </div>`
            }
            else {
                horarioescalado += `<div class = "escalados"> 
        <input type="checkbox" class = "horaescalad" id=${horario} name=${motorista}>
        <label for=${horario}" class="btn">${horario}  = ${motorista}</label> `
            }

            horariosstand.push({ hora: `${horario}`, motorista: `${motorista}`, diadasemana: `${diadasemana}`, horaR: `${horarioretorno}` })
            localStorage.setItem(`horariosstand`, JSON.stringify(horariosstand))

        }




        document.getElementById('hora-escalada').innerHTML += horarioescalado // Listando motoristas Escalados

        let idselect = [] // remover os motoristas ja escalados
        checkboxes.forEach((checkbox) => {
            idselect.push(checkbox.id);

        });
        if (idselect.length < listaMotorista.length) {
            while (idselect.length > 0) {
                var idclean = idselect.pop();
                var index = listaMotorista.map(x => {
                    return x.matricula
                }).indexOf(idclean);
                listaMotorista.splice(index, 1);
            }
            console.log(listaMotorista)
            let htmlLista = ''
            listaMotorista.forEach(element => {

                element.nomeMotorista.includes("-")
                var basic = element.nomeMotorista.split("-").join(" ")
                htmlLista += `
        <div class = "container">
            <input type="checkbox" class = "motorista-select" id=${element.matricula} name=${element.nomeMotorista}>
            <div class = "linha" ><b>Matricula: </b>${element.matricula} </div>
            <div class = "namemot"><b>Nome: </b>${basic} </div>
        </div>
        `

                document.getElementById('listaMotorista').innerHTML = htmlLista
            })

        }
        else {
            var idclean = idselect.pop();
            var index = listaMotorista.map(x => {
                return x.matricula
            }).indexOf(idclean);
            listaMotorista = [];
            document.getElementById('listaMotorista').innerHTML = ""

        }

        // removido motoristas escalados


        let horaselect = [] //remover horarios de rotina escalados 
        if (horax.length == 1) {
            horariox.forEach((checkbox) => {
                horaselect.push(checkbox.id);
            });
            var horaCerta = horaselect.pop()
            var horarioselecionado = listahorariosex.map(x => {
                return x.hora
            }).indexOf(horaCerta);


            listahorariosex.splice(horarioselecionado, 1);

        }
        else {
            radioselect.forEach((checkbox) => {
                horaselect.push(checkbox.id);
            });

            var horaCerta = horaselect.pop()
            var horarioselecionado = window.dia.map(x => {
                return x.hora
            }).indexOf(horaCerta);


            window.dia.splice(horarioselecionado, 1);
            console.log(window.dia)


            let horaRselect = []

            horarioR.forEach((checkbox) => {
                horaRselect.push(checkbox.id);
            });

            var horaRCerta = horaRselect.pop()
            var horarioRselecionado = horaRet.map(x => {
                return x.horaR
            }).indexOf(horaRCerta);


            horaRet.splice(horarioRselecionado, 1);
            console.log(horaRet)


        }
        h2 = ""
        horaRet.forEach(element => { // para cada elemento dentro do local storage onde armazenamos as horas e feito uma pequena tag html para estilizar e adicionar uma nova checkbox 
            h2 += `<div class= "horario-retorno">
    <input type="checkbox" class = "checkbox-retornos" id=${element.horaR}
    <div class = "hora" ><b>Horario: </b>${element.horaR} </div>
    </div>
    `
        });
        document.getElementById('horariosderetorno').innerHTML = h2

        h1 = ""
        window.dia.forEach(element => { // para cada elemento dentro do local storage onde armazenamos as horas e feito uma pequena tag html para estilizar e adicionar uma nova checkbox 
            h1 += `<div class= "hora-disponivel">
    <input type="checkbox" class = "horario-disponivel" id=${element.hora}
    <div class = "hora" ><b>Horario: </b>${element.hora} </div>
    </div>
    `
        });
        document.getElementById('horariosNEscalados').innerHTML = h1



        // removido horarios escalados 

        escalarhoraextra()
        //listar novamente os motoristas porem agora removendo os motoristas ja escalados 
    }
    else {
        return
    }


}

function apagar() {
    // remover horarios extras escalados do local storage 
    let horaselect2 = document.querySelectorAll(`input[class = "input-horaextra"]:checked`)

    for (var i = 0; i < horaselect2.length; i++) {
        checkbox2 = horaselect2[i]
        if (checkbox2.checked) {
            checkbox2.parentNode.remove(checkbox2);
            horaexselect = JSON.parse(localStorage.getItem("listahorariosex"))
            horaexselect = horaexselect.filter(x => x.hora != horaselect2[i].id)
            localStorage.setItem("listahorariosex", JSON.stringify(horaexselect))

        }
    }

    let horaselect3 = document.querySelectorAll(`input[class = "horaescalad"]:checked`) // caso o usuario se arrependa d ter escalado o horario EXTRA ele pode simplesmente apaga lo e fazelos retornar ao local storage
    for (var i = 0; i < horaselect3.length; i++) {
        checkbox3 = horaselect3[i]

    }
    var removido = checkbox3.id
    var removido2 = checkbox3.name
    console.log(removido2)
    const result = horariosexstand.find(({ hora, motorista }) => hora === `${removido}` && motorista === `${removido2}`)
    listahorariosex.push({ hora: `${result.hora}`, tipo: `${result.tipo}`, motorista: `${result.motorista}` })
    localStorage.setItem(`listahorariosex`, JSON.stringify(listahorariosex))


}

function finalizar() { // funcao criada para armazenar a string que dia o dia que foi feita a escala para usarmos na tela de impressao 
    var dataselect = document.getElementById("date").value
    var datacorreta = dataselect.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    diafeito.push({ data: `${datacorreta}` })
    localStorage.setItem(`diafeito`, JSON.stringify(diafeito))



}

function deletar() { // funcao que apaga as key do local storage para podemos recomecar uma nova escala e ela nao ficar somando com a antiga 
    localStorage.removeItem('horariosexstand')
    localStorage.removeItem('horariosstand')
}