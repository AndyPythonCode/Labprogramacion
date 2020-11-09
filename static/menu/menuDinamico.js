var menu = {
    "Mantenimiento":
        ["Catalogo de Cuentas","Entradas de Diario"],

    "Reportes":
        [{"Estados Financieros":["Estado de resultado","Estado de Situación Financiera","Estado de Flujo de Efectivo"]}
        ,"Movimiento de Cuentas"],

    "Consultas":[],

    "Utilitarios":[]
};

var index_url = 0;
var url = [
    //Mantenimiento
    "https://www.google.com/?hl=es",
        "https://www.google.com/?hl=es",
        "https://djangocentral.com/static-assets-in-django/",

    //Reportes
    "https://www.google.com/?hl=es",
        "https://www.google.com/?hl=es",
            "https://www.google.com/?hl=es",
            "https://www.google.com/?hl=es",
            "https://www.google.com/?hl=es",
        "https://docs.djangoproject.com/es/2.2/_modules/pytz/",

    //Consultas
    "#",

    //Utilitarios
    "#"
]

function separar(opciones)
{
    var html_sub = "<ul>";
    for(let sub in opciones)
    {
        if(typeof opciones[sub] == "object"){
            for(let titulo in opciones[sub])
            {
                html_sub+= `<li><a href="${url[index_url]}">${titulo}</a><ul>`;
                index_url++;
                for(let sub_2 in (opciones[sub][titulo]))
                {
                    html_sub+=`<li><a href="${url[index_url]}">${(opciones[sub][titulo])[sub_2]}</a></li>`; 
                    index_url++;
                }
            } 
            html_sub+="</ul>";
        }else{
            html_sub+=`<li><a href="${url[index_url]}">${opciones[sub]}</a></li>`;
            index_url++;
        }
    }
    return html_sub+"</ul>";
}

function menuDinamico(vector)
{
    var html;
    document.write("<nav><ul>");
    for(let titulo in vector)
    {
        html = `<li><a href="${url[index_url]}">${titulo}</a>`;
        index_url++;
        html += separar(vector[titulo]);
        document.write(html+"</li>");
    }
    document.write("</ul></nav>")
}

menuDinamico(menu);
