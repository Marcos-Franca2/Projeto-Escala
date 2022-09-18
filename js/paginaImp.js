organizar()

function organizar(){
    let dia= ``
    diafeito.forEach(element => {
        dia = `${element.data}`
        document.getElementById("textdata").innerHTML= ` <div class = dia><h1> ${dia} </h1></div> `
        
    })

    let horarios = ''
    horariosstand.forEach(element => {
        horarios += `<div class= horario>
        <div class= horario1> ${element.hora}  </div>
        <div class= horario1>  </div>
        <div class= horario1> ${element.motorista} </div>
        </div>`
        console.log(horarios)
    });
    document.getElementById("hora").innerHTML = horarios

}