organizar()
// pagina criada para organizar os horarios e motoristas em como se fosse uma planilha Excel (modelo fidelizado na empresa onde sera ultilizado)
function organizar() {
    let dia = ``
    diafeito.forEach(element => {
        dia = `${element.data}`
        document.getElementById("textdata").innerHTML = ` <div class = dia><p> ${dia} </p></div> `
    })

    let diadasemana1 = ``
    horariosstand.forEach(element => {
        diadasemana1 = `${element.diadasemana}`
        document.getElementById("diadasemana").innerHTML = ` <div class = dia><p>  ${diadasemana1}   </p></div> `
        
      })

    let horarios = ''
    horariosstand.sort(function (a, b) { // oraganizando por criterio de horarios 
        if (a.hora > b.hora) {
          return 1;
        }
        if (a.hora < b.hora) {
          return -1;
        }

        return 0;
      });

      
    horariosstand.forEach(element => 
    {
        horarios += `<tr>
        <td id="ta1">
            <input id = "horario-onibus" type = "text" value = "${element.hora}" </input>
        </td>
        
        <td id="ta1">
        <input id = "numero-onibus" type = "text" value = "" </input>
        </td>

        <td id="ta2">
        <input id = "motorista-onibus" type = "text" value = "${element.motorista}" </input>
        </td>
        </tr> 
        `


    });

    /*        <td id="ta2">
    <b>${element.motorista}</b>
     </td>
    </tr> 
    ALTERAÇÃO FEITA PARA QUE PUDESSE EDITAR AS INFORAÇÕES DEPOIS DE ECALADA*/


    document.getElementById("hora").innerHTML = horarios

    horariosexstand.sort(function (a, b) {
        if (a.hora > b.hora) {
          return 1;
        }
        if (a.hora < b.hora) {
          return -1;
        }
        return 0;
      });
      
    let horariosEx = ''
    horariosexstand.forEach(element => {
        horariosEx += `<tr>
        <td id="ta1">
          
            <input id = "horario-onibus" type = "text" value = "${element.hora}" </input>
        </td>
        
        <td id="ta1">
        <input id = "motorista-onibus" type = "text" value = "${element.tipo}" </input>
        </td>

        <td id="ta2">
      
       <input id = "motorista-onibus" type = "text" value = "${element.motorista}" </input>
        </td>
        </tr> 
        `
        

    });
    document.getElementById("horaex").innerHTML = horariosEx


}

