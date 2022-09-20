organizar()

function organizar(){
   let dia= ``
    diafeito.forEach(element => {
        dia = `${element.data}`
        document.getElementById("textdata").innerHTML= ` <div class = dia><p> ${dia} </p></div> `
        document.getElementById("diadasemana").innerHTML = ` <div class = dia><p> ${diadasemana} </p></div> `
    })

        let diadasemana1= ``
         horariosstand.forEach(element => {
        diadasemana1 = `${element.diadasemana}`
             document.getElementById("diadasemana").innerHTML = ` <div class = dia><p>  ${diadasemana1} "  </p></div> `
         })

    let horarios = ''
    horariosstand.forEach(element => {
        horarios += `<tr">
        <td id="ta1">
            ${element.hora}
        </td>
        
        <td id="ta1">
        <input id = "numero-onibus" type = "text" value = "" </input>
        </td>

        <td id="ta2">
        ${element.motorista}

        </td>
        </tr> 
        `
        console.log(horarios)
    });
    document.getElementById("hora").innerHTML = horarios

}
/*        <input type = "text" placeholder = "${element.motorista} ">  </input> */