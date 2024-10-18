
//creo funcion promedio

function Promedio(notes,acum){

    return  notes/acum;

}
//clase de profesores y sus propiedades
class userProf{
    constructor(usuario,contra,nombreProf){
        this.usuario = usuario;
        this.contra = contra;
        this. nombreProf= nombreProf;
    }
}

const  profesores = `
ingreso Profesor 1:
Usuario: profesorUno
Clave: 1234
Nombre: Carlos

ingreso Profesor: 2
Usuario: profesorDos
Clave: 5678
Nombre: Sabrina

ingreso Profesor 3:
Usuario: profesorTres
Clave: 9012
Nombre: Pedro
`
alert(profesores)




// usuarios , clave y nombre de los profesores
let primerProfe = new userProf("profesorUno" ,"1234","Carlos");
let segundoProfe= new userProf("profesorDos", "5678","Sabrina");
let tercerProfe= new userProf("profesorTres", "9012","Pedro");

document.querySelector('#formulario').addEventListener('submit', function (e) {
    e.preventDefault();


//pide ingresar usuario y clave de los profesores indicando cada uno de ellos
let usuarioProf =  document.querySelector('#usuario').value;
// prompt("ingrese un usuario de profesor:\nprofesorUno\nprofesorDos\nprofesorTres");
let contraProf =  document.querySelector('#contra').value;

// let profesorProfesor = document.querySelector('#nombreProf')

// prompt("Ingrese la clave:\nP1: 1234\nP2: 5678\nP3: 9012");

const mensajeBienvenida = usuarioProf == primerProfe.usuario && contraProf== primerProfe.contra
    ? `Bienvenido Profesor ${primerProfe.nombreProf}`
    : usuarioProf == segundoProfe.usuario && contraProf == segundoProfe.contra
    ? `Bienvenida Profesora ${segundoProfe.nombreProf}`
    : usuarioProf == tercerProfe.usuario && contraProf == tercerProfe.contra
    ? `Bienvenido Profesor ${tercerProfe.nombreProf}`
    : 'Usuario y/o clave errónea, refrescar página!';

alert(mensajeBienvenida);

let bienvenida = mensajeBienvenida;

if(bienvenida  !== 'Usuario y/o clave errónea, refrescar página!'){

    const notasAlumno = [];
let cantidad = 5;

let alumnoIngreso = prompt("Ingrese Alumno:\n Agustin \n Tomas \n Marcelo");

if(alumnoIngreso == "Agustin" || "Tomas" ||"Marcelo"){
    do{
        let notasAlum = parseInt(prompt("Ingrese las 5 notas del alumnos:"));
        notasAlumno.push(notasAlum);
    }while(notasAlumno.length <= cantidad-1);
}else{
    alert("Alumno inexsistente, refresque la pagina!");
}

//sumando las notas ingresadas dentro del array
let totalNotas = notasAlumno.reduce((a,e) => a+e,0);
parseInt(notasAlumno);
//llamando a la funcion promedio para y dandole por parametro el valor acumulado y la cantidad de notas 
let prom = Promedio(totalNotas,cantidad);


//este switch mostrara por pantalla el promedio del alumno que se ingreso 
while(alumnoIngreso == "Agustin" || alumnoIngreso == "Tomas" || alumnoIngreso == "Marcelo"){
    switch(alumnoIngreso){
        case "Agustin":
            alert("El promedio de Agustin es : " + prom);
            break;
        case "Tomas":
            alert("El promedio de Tomas es : " + prom);
            break;
        case "Marcelo":
            alert("El promedio de Marcelo es : " + prom);
            break;    
    }
    break;
}
//para ver el acumulado de las notas ingresadas.
console.log("El total de las notas ingresadas es :" + totalNotas);

}



    })

