// class Dice {

//     pushDice() {
//         return Math.floor(Math.random() * 6) + 1;
//     }

// }

// class Game {

//     constructor() {
//         this._playerA = 0;
//         this._playerB = 0;
//         this._dice = new Dice();
//     }

//     pushPlayer() {
//         while (this._playerA < 100 && this._playerB < 100) {
            
//             this._playerA = this._playerA + this.getPosition(this._dice.pushDice());
//             this._playerB = this._playerB + this.getPosition(this._dice.pushDice());
//             console.log('Jugador A: ' + this._playerA);
//             console.log('Jugador B: ' + this._playerB);

//         }
//         return [this._playerA, this._playerB]
//     }

//     getWinner(array) {

//         if (array[0] >= 100 && array[1] >= 100 ) {
//             return 'Empate'
//         }
          
//         if (array[0] > array[1]) {
//             return 'Gano el Player A'  
//         }

//         if (array[0] < array[1]) {
//             return 'Gano el Player B'  
//         }
        
//     }

//     getPosition(value) {
//         switch (value) {
//             case 1: return 1;
//             case 2: return 1;
//             case 3: return 3;
//             case 4: return 2;
//             case 5: return 2;
//             case 6: return 2;
//             default: return 0;
//         }
//     }

// }

let game01 = new Game()
console.log(game01.getWinner(game01.pushPlayer()))