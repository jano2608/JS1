/* Count 'a's */

var countA = document.getElementsByTagName('a')
console.log(countA.length)

/* Penúltimo link html */

console.log(countA[countA.length -2].href)

/* Número de enlaces que van a 'http://prueba' */

var count = 0;
for(var i = 0; i < countA.length; ++i){
    if(countA[i] == 'http://prueba/'){
        count++;
    };
};

console.log(count);

/* Número de enlaces del tercer párrafo */

var parr = document.getElementsByTagName('p')[2]
console.log(parr.getElementsByTagName('a').length)
