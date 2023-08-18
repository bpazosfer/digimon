const form  = document.getElementById('searcher');

form.addEventListener('submit', (event) => {
    console.log("click");
    const name = form.elements['name'];
    let digimonName = name.value;
    console.log(digimonName);
    
    // Solicitud GET (Request).
    fetch('https://digimon-api.vercel.app/api/digimon/name/'+digimonName)
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => searchDigimon(json)) 
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

    event.preventDefault();
});

function searchDigimon(digimons){
    let placeholder = document.querySelector('#data-output');
    let out = '';
    if (!digimons.ErrorMsg) {
        for (let digimon of digimons) {
            out += `
                <tr>
                    <td><img src ='${digimon.img}'; style="width:128px;height:128px;"> </td>
                    <td>'${digimon.name}' </td>
                    <td>'${digimon.level}' </td>
                </tr>
            `;
        }
    } else {
        alert(digimons.ErrorMsg);
        
    }
    
    placeholder.innerHTML = out; 
}