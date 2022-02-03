/*
César Pumacayo DIV Z
Ejercicio E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;

sueldo = document.getElementById('txtIdSueldo').value;
sueldo = parseInt(sueldo);


//resultado = sueldo *1.1; //resultado = 121.00000000000001
resultado = sueldo + (sueldo / 100 * 10); //resultado = 121


document.getElementById('txtIdResultado').value = resultado;

}

//txtIdSueldo
//txtIdResultado