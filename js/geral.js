
var listaMotorista = localStorage.getItem("listaMotorista")
var segundafeira = localStorage.getItem("Segunda-feira")
if(segundafeira == undefined || segundafeira == ""){
    segundafeira = []
}
else {
    segundafeira = JSON.parse(segundafeira)
}


if(listaMotorista == undefined || listaMotorista == ""){
    listaMotorista = []
}
else {
    listaMotorista = JSON.parse(listaMotorista)
}


