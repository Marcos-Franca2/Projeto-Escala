organizar()

function organizar() {
    let dia = ``
    diafeito.forEach(element => {
        dia = `${element.data}`
        document.getElementById("textdata").innerHTML = ` <div class = dia><p> ${dia} </p></div> `
        document.getElementById("diadasemana").innerHTML = ` <div class = dia><p> ${diadasemana} </p></div> `
    })

    let diadasemana1 = ``
    horariosstand.forEach(element => {
        diadasemana1 = `${element.diadasemana}`
        document.getElementById("diadasemana").innerHTML = ` <div class = dia><p>  ${diadasemana1}   </p></div> `
    })

    let horarios = ''
    horariosstand.sort(function (a, b) {
        if (a.hora > b.hora) {
          return 1;
        }
        if (a.hora < b.hora) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      
    horariosstand.forEach(element => 
    {
        horarios += `<tr>
        <td id="ta1">
            ${element.hora}
        </td>
        
        <td id="ta1">
        <input id = "numero-onibus" type = "text" value = "" </input>
        </td>

        <td id="ta2">
        <b>${element.motorista}</b>

        </td>
        </tr> 
        `


    });
    document.getElementById("hora").innerHTML = horarios

    horariosexstand.sort(function (a, b) {
        if (a.hora > b.hora) {
          return 1;
        }
        if (a.hora < b.hora) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      
    let horariosEx = ''
    horariosexstand.forEach(element => {
        horariosEx += `<tr>
        <td id="ta1">
            ${element.hora}
        </td>
        
        <td id="ta1">
        ${element.tipo}
        </td>

        <td id="ta2">
       <b> ${element.motorista} </b>

        </td>
        </tr> 
        `
        

    });
    document.getElementById("horaex").innerHTML = horariosEx


}
/*        <input type = "text" placeholder = "${element.motorista} ">  </input> */
