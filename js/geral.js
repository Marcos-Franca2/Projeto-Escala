
var segundafeira = localStorage.getItem("Segunda-feira")
if(segundafeira == undefined || segundafeira == ""){
    segundafeira = []
}
else {
    segundafeira = JSON.parse(segundafeira)
}

var tercafeira = localStorage.getItem("Terça-Feira")
if(tercafeira == undefined || tercafeira == ""){
    tercafeira = []
}
else {
    tercafeira = JSON.parse(tercafeira)
}

var quartafeira = localStorage.getItem("Quarta-Feira")
if(quartafeira == undefined || quartafeira == ""){
    quartafeira = []
}
else {
    quartafeira = JSON.parse(quartafeira)
}

var quintafeira = localStorage.getItem("Quinta-Feira")
if(quintafeira == undefined || quintafeira == ""){
    quintafeira = []
}
else {
    quintafeira = JSON.parse(quintafeira)
}

var sextafeira = localStorage.getItem("Sexta-Feira")
if(sextafeira == undefined || sextafeira == ""){
    sextafeira = []
}
else {
    sextafeira = JSON.parse(sextafeira)
}

var sabado = localStorage.getItem("Sabado")
if(sabado == undefined || sabado == ""){
    sabado = []
}
else {
    sabado = JSON.parse(sabado)
}

var domingo = localStorage.getItem("Domingo")
if(domingo == undefined || domingo == ""){
    domingo = []
}
else {
    domingo = JSON.parse(domingo)
}


var listaMotorista = localStorage.getItem("listaMotorista")

if(listaMotorista == undefined || listaMotorista == ""){
    listaMotorista = []
}
else {
    listaMotorista = JSON.parse(listaMotorista)
}


