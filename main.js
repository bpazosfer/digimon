// Solicitud GET (Request).
fetch('https://digimon-api.vercel.app/api/digimon')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => addToTable(json)) 
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores


 // Funcion de llenado de tabla
function addToTable(digimons){
    console.log("log dentro de addToTable");
    console.log(digimons);
    let placeholder = document.querySelector('#data-output');
    let out = '';
    
    for (let digimonDentroDeLista of digimons) {
        out += `
            <tr>
                <td><img src ='${digimonDentroDeLista.img}'; style="width:128px;height:128px;"> </td>
                <td>'${digimonDentroDeLista.name}' </td>
                <td>'${digimonDentroDeLista.level}' </td>
            </tr>
        `;
    }


    placeholder.innerHTML = out; 
}
