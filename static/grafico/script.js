const input = document.querySelectorAll('.antillas-mayores input');
const ctx = document.getElementById('myChart').getContext('2d');
let grafico = null;//Se declara global para acceder a ella si el usuario quiere introducir sus datos

async function poblacionDefault(){
    //Cargo los datos .json de las antillas
    antillas = {
        "República Dominicana": {
            "poblacion":"10266000",
            "backGround": "#800080"
        },
        "Haití": {
            "poblacion":"11402528",
            "backGround": "#FF0000"
        },
        "Jamaica":{
            "poblacion":"2961167",
            "backGround": "#00FFFF"
        },
        "Puerto Rico":{
            "poblacion":"2829350",
            "backGround": "#00FF00"
        },
        "Cuba":{
            "poblacion":"11326616",
            "backGround": "#FFFF00"
        }
    }

    //Agrego los datos
    let i = 0;
    for(let pais in antillas){
        input[i].id = pais;
        input[i].placeholder = pais;
        input[i].value = antillas[pais].poblacion;
        i+=1;
    }
    generarGraficoDefault(antillas);
}

function generarGraficoDefault(antillas){
    grafico = new Chart(ctx, {
        // EL tipo de grafico
        type: 'pie',
        // Datos que contiene
        data: {
            labels: getLabels(antillas),
            datasets: [{
                label: 'Población 2020',
                backgroundColor: getBackGroundColor(antillas),
                data: getPoblacion(antillas)
            }]
        },
    });
}

function getLabels(JSON){
    let labels = [];
    for(let elemento in JSON){
        labels.push(elemento);
    }
    return labels;
}

function getBackGroundColor(JSON){
    let colors = [];
    for(let elemento in JSON){
        colors.push(JSON[elemento].backGround);
    }
    return colors;
}

function getPoblacion(JSON){
    let poblacion = [];
    for(let elemento in JSON){
        poblacion.push(JSON[elemento].poblacion);
    }
    return poblacion; 
}

function limpiar(){
    input.forEach((cada, index) =>{
        cada.value = "";
        grafico.data.datasets[0].data[index] = 0;
    })
    grafico.update();
}

function usuarioGrafico(posicion){
    grafico.data.datasets[0].data[posicion] = input[posicion].value;
    grafico.update();
}