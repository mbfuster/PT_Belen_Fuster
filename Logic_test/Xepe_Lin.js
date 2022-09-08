const readline = require('readline');

// La funcion Xepelin evalua si un numero es divisible por 3, 5 o ambos. Dependiendo del resultado entrega 
// como respuesta "Xepe", "Lin" o "Xepelin". 
// Para probar la funcion se incorporo una funcion de interaccion a traves de la terminal. Si prefiere no usarla,
// puede comentar las lineas correspondientes.

Xepelin = (number) => {
    let answer = ""
    
    if (number % 3 == 0) {
        answer += 'xepe'
    }
    if (number % 5 == 0){
        answer+= "lin"
    }
    answer = answer.charAt(0).toUpperCase() + answer.slice(1)
    return answer
}

// Funcion para interaccion a traves de la terminal. Comentar entre las lineas 22 y 43 para no ejecutar
function askForNumber(input) {
    const getAnswer = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    getAnswer.question(input, ans => {
        let result  = Xepelin(ans)
        console.log(result,'\n')
        process.stdout.write("Try another one? y/n: \n");
        process.stdin.once("keepGoing", (keepGoing) => {
            if (keepGoing.toString() == "y"){
                getAnswer.close();
                askForNumber("Insert a number please: ");
            } else {
                console.log('Bye bye')
                getAnswer.close();
            }
        });
    })
}
const ans = askForNumber("Insert a number please: ");

// Algunos test, si se prefiere no usar la terminal, Descomentar desde la linea 46 
// var test = 0

// test = Xepelin(5)
// console.log(test)

// test = Xepelin(3)
// console.log(test)

// test = Xepelin(15)
// console.log(test)

// test = Xepelin(17)
// console.log(test)

// test = Xepelin(1.2)
// console.log(test)

// test = Xepelin(1.5)
// console.log(test)
