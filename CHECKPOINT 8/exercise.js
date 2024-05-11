var miLista = ["velma", "exploradora", "jane", "john", "harry"];

// FOR LOOP
for (var i= 0; i < miLista.length; i++) {
  console.log(miLista[i]);
}

// WHILE LOOP
var i = 0;
while (i < miLista.length) {
  console.log(miLista[i]);
  i++;
}

// ARROW FUNCTION
greeting = () => { console.log('Hola mundo'); }
greeting();
