console.log('hola Barquitos');

function aleatorio(){
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 10)

    return {x, y}
}

console.log(aleatorio());

const game = {
    panel:  [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    insertaBarco: () => {

    }
}

console.log('panel', game.panel);
game.insertaBarco()
console.log('panel con barcos', game.panel);
// game.pintaPanel()





// Clase


// Creamos instancia
//miBarco.mostrarInfo()