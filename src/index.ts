/* Ejercicios de Repaso
Ejercicio – Personas en una Disco
• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
------------------------------
Si el aleatorio lo generás entre 16 y 40..
Cuántas personas quedan afuera?
Cuántas personas entran? Y de las que entran...cuántas tienen entre 18 y 21 años y cuántas más de 21?
En este último caso cobraría sentido la pregunta de cuanta gente en total entro, considerando que el límite es de 270 personas. (editado) 

*/

let gente: number[] = new Array(270);
let i = 0;
let acumulador = 0;
let acumulador2 = 0;
let acumulador3 = 0;
let acumulador4 = 0;
let acumulador5 = 0;
for (i = 0; i < gente.length; i++) {
  gente[i] = Math.round(Math.random() * (40 - 16) + 16);
  acumulador = acumulador + 1;
}
console.log("Edades de personas en la Disco:", "" + gente);
console.log(" Capacidad en la Disco es: ", "" + acumulador);

for (i = 0; i < gente.length; i++) {
  if (gente[i] < 21) {
    acumulador2 = acumulador2 + 1;
  } else {
    acumulador3 = acumulador3 + 1;
  }
}
console.log(" Cantidad de personas entre 18 y 21 años son:", "" + acumulador2);
console.log(" Cantidad de  personas mayores de 21 años son:", "" + acumulador3);

for (i = 0; i < gente.length; i++) {
  if (gente[i] < 18 && gente[i] > 16) {
    acumulador4 = acumulador4 + 1;
  } else {
    acumulador5 = acumulador5 + 1;
  }
}
console.log(
  " Cantidad de personas No habilitadas para entrar (>18<16años) son:",
  "" + acumulador4
);
console.log(
  " Cantidad de personas habilitadas para entrar son:",
  "" + acumulador5
);
