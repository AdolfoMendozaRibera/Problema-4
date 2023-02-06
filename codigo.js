/*
Los datos de Cofla y del resto de los alumnos ya fueron almacenados correctamente, ahora tenemos que crear
un sistema que le permita a los profesores visualizar esta informacion y definir cuando los alumnos van a rendir
PROBLEMA B
-Interfaz agradable  y atractiva
- Contener datos de manera estructurada 
-Poder elegir cuando rinde
-Deben actualizar y reemplazar
*/


alumnos=
[{
    nombre:"Adolfo",
    email:"adolfomendozaribera@gmail",
    materia:"matematica"
},
{
    nombre:"Ramirez",
    email:"Ramirez@gmail",
    materia:"fisica 3"
},
{
    nombre:"Rubem",
    email:"Rubem@gmail",
    materia:"lenguaje"
},
{
    nombre:"Gonzales",
    email:"Gonzales@gmail",
    materia:"Programacion"
},
{
    nombre:"Guillermo",
    email:"Guillermo@gmail",
    materia:"Liderasgo"
}
]

const boton=document.querySelector(".boton-confirmar")
const contenedor=document.querySelector(".griv-contenedor")

for (alumno in alumnos)
{
    let dato=alumnos[alumno];
    let nombre=dato["nombre"];
    let email=dato["email"];
    let materia=dato["materia"];
    let htmlCode=
    `
        <div class="griv nombre">${nombre}</div>
        <div class="griv email">${email}</div>
        <div class="griv materia">${materia}</div>
        <div class="griv semana">
            <select class="semana_elegida">
                <option value="semana1">semana1</option>
                <option value="semana2">semana2</option>
            </select>
        </div> `;
    contenedor.innerHTML +=htmlCode;
}

boton.addEventListener("click",()=>
{
    let confirmar= confirm("¿Estas seguro de enviarlo?")
    if (confirmar)
    {
        document.body.removeChild(boton);
        let elementos=document.querySelectorAll(".semana");
        let semana_elegida=document.querySelectorAll(".semana_elegida")

        for (elemento in elementos)
        {
            semana=elementos[elemento];
            semana.innerHTML=semana_elegida[elemento].value;
        }
    }
})


