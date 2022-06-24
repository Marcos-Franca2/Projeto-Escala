
var listaMotorista = localStorage.getItem("listaMotorista")


if(listaMotorista == undefined || listaMotorista == ""){
    listaMotorista = []
}
else {
    listaMotorista = JSON.parse(listaMotorista)
}

