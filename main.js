console.log('hola Barquitos');

function aleatorio(){
    const x = Math.floor(Math.random() * 8)
    const y = Math.floor(Math.random() * 10)

    return {x, y}
}

console.log(aleatorio());

const barcos = [[1, 1, 1]]

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
        for (let i = 0; i < 5; i++) {
            const randomPositionX = Math.floor(Math.random() * (10 - barcos[0].length))
            const randomPositionY = Math.floor(Math.random() * 10)

            for (let j = 0; j < barcos.length; j++) {
                const filaBarco = barcos[j];

                for (let k = 0; k < filaBarco.length; k++) {
                    if (filaBarco[k] === 1) {
                        game.panel[randomPositionY + j][randomPositionX + k] = 1;
                    }
                }
            }
        }
    },
    pintaPanel: () => {
        const panelID = document.querySelector('.panel')
        panelID.innerHTML = ''

        for (let i = 0; i < game.panel.length; i++) {
            let divFila = '<div class="fila">'

            for (let j = 0; j < game.panel[i].length; j++) {
                let divCasilla = ''
                
                if (game.panel[i][j] == 0) {
                    divCasilla += '<div class="casilla">0</div>'
                }

                if (game.panel[i][j] == 1) {
                    divCasilla += '<div class="casilla barco">1</div>'
                }

                divFila += divCasilla
            }

            divFila += '</div>'
            panelID.innerHTML += divFila
        }
    }
}

console.log('panel', game.panel);
game.insertaBarco()
console.log('panel con barcos', game.panel);
game.pintaPanel()

document.querySelector('#btnDispara').addEventListener('click', (e) => {
    e.preventDefault()
    const x = document.querySelector('#x').value
    const y = document.querySelector('#y').value

    if (game.panel[y][x] == 0) {
        document.querySelector('#mensaje').innerHTML = 'AGUA'
    }
    
    if (game.panel[y][x] == 1) {
        document.querySelector('#mensaje').innerHTML = 'TOCADO'
    }
})



// Clase
class Barquito {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    mostrarInfo(){
        console.log(`Datos de la instancia: x: ${this.x}, y: ${this.y}`);
    }
}

// Creamos instancia
const miBarco = new Barquito(5, 4)
miBarco.mostrarInfo()