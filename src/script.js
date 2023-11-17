/*----------------------------
FASE DI PREPARAZIONE DEL GIOCO
--------------------------- */

//recupero dalla pagina tutti gli elementi attivi del gioco

let vittorieX = document.querySelector('.victories-x');
let vittorieO = document.querySelector('.victories-O');
const iconX = document.querySelector('.icon-X');
const iconO = document.querySelector('.icon-O');


const grid = document.querySelector('.grid');
const cells = [];
let urlX = 'url("../resources/xIcon.svg")';
let urlO = 'url("../resources/oIcon.svg")';
let urlXGreen = 'url("../resources/xIconGreen.svg")';
let urlOGreen = 'url("../resources/oIconGreen.svg")';

let countX = 0;
let countO = 0;

let currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
blinkCurrentPlayerIcon();

let scoreX = 0;
let scoreO = 0;

const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');
const endRoundScreen = document.querySelector('.end-round-screen');
const endRoundText = document.querySelector('.end-round-text');
const playNextRound = document.querySelector('.play-next-round');






/*------------------------
CREAZIONE GRIGLIA DI GIOCO
------------------------ */

for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cell.addEventListener('click', cellClickHandler);
    cells.push(cell);

    //TOLGO I BORDI CHE NON SERVONO ALLA GRIGLIA
    switch (i){
        case 1:
            cell.style.borderTop = 'none';
            cell.style.borderLeft = 'none';
            break;
        case 2:
            cell.style.borderTop = 'none';
            break;
        case 3:
            cell.style.borderTop = 'none';
            cell.style.borderRight = 'none';
            break;
        case 4:
            cell.style.borderLeft = 'none';
            break;
        case 5:
            break;
        case 6:
            cell.style.borderRight = 'none';
            break;
        case 7:
            cell.style.borderLeft = 'none';
            cell.style.borderBottom = 'none';
            break;
        case 8:
            cell.style.borderBottom = 'none';
            break;
        case 9:
            cell.style.borderRight = 'none';
            cell.style.borderBottom = 'none';
            break;
    }
}

/*----------------------------------------------------------------------------------------------------------
                                                FUNZIONI
----------------------------------------------------------------------------------------------------------*/

/*---------------------------------
🔴 FUNZIONE PER DETERMINARE IL TURNO
---------------------------------*/
function cellClickHandler() {
    if (cellIsEmpty(this)) {                //Controllo se la cella è vuota. Se la condizione è vera inserisco una seconda condizione:
        if (currentPlayer === 'X') {        //se il giocatore corrente è X
            insertX(this);                  //inserisco la X
        } else {                            //altrimenti
            insertO(this);                  //inserisco il O
        }
        switchCurrentPlayer();              //richiamo la funzione per cambiare il turno
    }
    checkWinner();
}

function blinkCurrentPlayerIcon() {
    if (currentPlayer === "X") {
        iconX.classList.add('blinking-element');
        iconO.classList.remove('blinking-element');
    } else {
        iconO.classList.add('blinking-element');
        iconX.classList.remove('blinking-element');
    }
}

/*------------------------------
🟠 FUNZIONE PER SWITCHARE IL TURNO
------------------------------*/
function switchCurrentPlayer() {
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
    blinkCurrentPlayerIcon();
}


/*---------------------------------------------
⚪️ FUNZIONE PER DETERMINARE SE LA CELLA E VUOTA
---------------------------------------------*/
function cellIsEmpty (cell) {
    return !cell.style.backgroundImage;         //return: non ci deve essere l'immagine di sfondo nella cella
}


/*----------------------------
❎ FUNZIONE PER INSERIRE LA X
 ---------------------------*/
function insertX (cell) {
    if (cellIsEmpty(cell)) {                            // Se la cella è vuota allora permetto alla funzione di modificare l'estetica della cella
        cell.style.backgroundImage = urlX;  // per fare in modo che possa essere inserita la X
        cell.style.backgroundSize = "contain";
        cell.style.backgroundRepeat = "no-repeat";
        cell.style.backgroundPosition = "center";
        countX++;                                       //ogni volta che viene inserita una X incremento il conteggio della X
        console.log("x" + countX);                      //per tenere traccia di quante X ci sono nella griglia
    }                                                   //(countX mi servirà nella funzione checkWinner per gestire la partita in caso di parità)
}



/*----------------------------
🅾️ FUNZIONE PER INSERIRE LA O
 ---------------------------*/
function insertO (cell) {
    if (cellIsEmpty(cell)) {                            // Se la cella è vuota allora permetto alla funzione di modificare l'estetica della cella
        cell.style.backgroundImage = urlO;  // per fare in modo che possa essere inserita il O
        cell.style.backgroundSize = "contain";
        cell.style.backgroundRepeat = "no-repeat";
        cell.style.backgroundPosition = "center";
        countO++;                                       //ogni volta che viene inserita un O incremento il conteggio del O
        console.log("o" + countO);                      //per tenere traccia di quanti O ci sono nella griglia
    }                                                   //(countO mi servirà nella funzione checkWinner per gestire la partita in caso di parità)
}




/*--------------------------------------
🏆 FUNZIONE PER DETERMINARE IL VINCITORE
--------------------------------------*/
function checkWinner() {
    let winner = null;             //dichiaro una variabile winner = null per poter far finire il round anche senza un vincitore
    switch (true) {

                                                //SWITCH DELLE COMBINAZIONI DI VITTORIA DELLA X

        case (
            cells[0].style.backgroundImage === urlX &&      //se nella cella 0 c'è la X
            cells[1].style.backgroundImage === urlX &&      //se nella cella 1 c'è la X
            cells[2].style.backgroundImage === urlX         //se nella cella 3 c'è la X
        ):
            winner = 'X';                                                   //il vincitore è X
            cells[0].style.backgroundImage = urlXGreen;    //inserisci la X verde nella cella 0
            cells[1].style.backgroundImage = urlXGreen;    //inserisci la X verde nella cella 1
            cells[2].style.backgroundImage = urlXGreen;    //inserisci la X verde nella cella 2
            break;
                                                                            //.... e cosi via...
        case (
            cells[3].style.backgroundImage === urlX &&
            cells[4].style.backgroundImage === urlX &&
            cells[5].style.backgroundImage === urlX
        ):

            url("x-solid.svg")

            winner = 'X';
            cells[3].style.backgroundImage = urlXGreen;
            cells[4].style.backgroundImage = urlXGreen;
            cells[5].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[6].style.backgroundImage === urlX &&
            cells[7].style.backgroundImage === urlX &&
            cells[8].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[6].style.backgroundImage = urlXGreen;
            cells[7].style.backgroundImage = urlXGreen;
            cells[8].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[0].style.backgroundImage === urlX &&
            cells[3].style.backgroundImage === urlX &&
            cells[6].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[0].style.backgroundImage = urlXGreen;
            cells[3].style.backgroundImage = urlXGreen;
            cells[6].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[1].style.backgroundImage === urlX &&
            cells[4].style.backgroundImage === urlX &&
            cells[7].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[1].style.backgroundImage = urlXGreen;
            cells[4].style.backgroundImage = urlXGreen;
            cells[7].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[2].style.backgroundImage === urlX &&
            cells[5].style.backgroundImage === urlX &&
            cells[8].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[2].style.backgroundImage = urlXGreen;
            cells[5].style.backgroundImage = urlXGreen;
            cells[8].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[0].style.backgroundImage === urlX &&
            cells[4].style.backgroundImage === urlX &&
            cells[8].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[0].style.backgroundImage = urlXGreen;
            cells[4].style.backgroundImage = urlXGreen;
            cells[8].style.backgroundImage = urlXGreen;
            break;

        case (
            cells[2].style.backgroundImage === urlX &&
            cells[4].style.backgroundImage === urlX &&
            cells[6].style.backgroundImage === urlX
        ):
            winner = 'X';
            cells[2].style.backgroundImage = urlXGreen;
            cells[4].style.backgroundImage = urlXGreen;
            cells[6].style.backgroundImage = urlXGreen;
            break;

                                                //SWITCH DELLE COMBINAZIONI DI VITTORIA DELLA O

        case (
            cells[0].style.backgroundImage === urlO &&     //stesso identico discorso fatto sopra per la X
            cells[1].style.backgroundImage === urlO &&
            cells[2].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[0].style.backgroundImage = urlOGreen;
            cells[1].style.backgroundImage = urlOGreen;
            cells[2].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[3].style.backgroundImage === urlO &&
            cells[4].style.backgroundImage === urlO &&
            cells[5].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[3].style.backgroundImage = urlOGreen;
            cells[4].style.backgroundImage = urlOGreen;
            cells[5].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[6].style.backgroundImage === urlO &&
            cells[7].style.backgroundImage === urlO &&
            cells[8].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[6].style.backgroundImage = urlOGreen;
            cells[7].style.backgroundImage = urlOGreen;
            cells[8].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[0].style.backgroundImage === urlO &&
            cells[3].style.backgroundImage === urlO &&
            cells[6].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[0].style.backgroundImage = urlOGreen;
            cells[3].style.backgroundImage = urlOGreen;
            cells[6].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[1].style.backgroundImage === urlO &&
            cells[4].style.backgroundImage === urlO &&
            cells[7].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[1].style.backgroundImage = urlOGreen;
            cells[4].style.backgroundImage = urlOGreen;
            cells[7].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[2].style.backgroundImage === urlO &&
            cells[5].style.backgroundImage === urlO &&
            cells[8].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[2].style.backgroundImage = urlOGreen;
            cells[5].style.backgroundImage = urlOGreen;
            cells[8].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[0].style.backgroundImage === urlO &&
            cells[4].style.backgroundImage === urlO &&
            cells[8].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[0].style.backgroundImage = urlOGreen;
            cells[4].style.backgroundImage = urlOGreen;
            cells[8].style.backgroundImage = urlOGreen;
            break;

        case (
            cells[2].style.backgroundImage === urlO &&
            cells[4].style.backgroundImage === urlO &&
            cells[6].style.backgroundImage === urlO
        ):
            winner = 'O';
            cells[2].style.backgroundImage = urlOGreen;
            cells[4].style.backgroundImage = urlOGreen;
            cells[6].style.backgroundImage = urlOGreen;
            break;
    }
        //COSA SUCCEDE IN CASO DI PARITA
        /*
        Dal momento che in tutto le celle della griglia sono 9 allora nel caso di un pareggio ci saranno
        o [5-X e 4-O] o [5-O e 4-X].
        Se ci sono [5-X e 4-O] o [5-O e 4-X] e in contemporanea la variabile winner rimane null allora...
        */
    if (countX === 5 && countO === 4 || countX === 4 && countO === 5 && winner === null) {
        endRoundText.innerText = 'NO WINNER';                       //...Testo fine round = NO WINNER
        endRoundScreen.classList.remove('hidden');           //...rimuovo la classe hidden dalla schermata di fine round
        playNextRound.addEventListener('click', resetGame);    //...resetto solo la griglia al click del bottone

        //COSA SUCCEDE SE VINCE LA X
    } else if (winner === 'X') {                                    // se vince la X
        console.log('Il giocatore X ha vinto!');
        updateScoreX();                                             //aumenta lo score di X
        if (scoreX === 3) {                                         // se lo score è uguale a 3
            endGameScreen.classList.remove('hidden');
            endGameText.textContent = 'The Winner is: X';           //X ha vinto la partita (3 round)
            playAgainButton.addEventListener('click', function () {
                location.reload();                                  //aggiorna tutta la pagina
            })
        } else {                                                    //altrimenti
                endRoundText.innerText = 'X WINS THE ROUND';        //X ha vinto il round
                endRoundScreen.classList.remove('hidden');
                playNextRound.addEventListener('click', resetGame); //resetto solo la griglia al click del bottone
            }

        //COSA SUCCEDE SE VINCE LA O
    } else if (winner === 'O') {                                    // se vince il O
        console.log('Il giocatore O ha vinto!');                    //aumenta lo score del O
        updateScoreO();
        if (scoreO === 3) {                                         // se lo score è uguale a 3
            endGameScreen.classList.remove('hidden');
            endGameText.textContent = 'The Winner is: O';           //O ha vinto la partita (3 round)
            playAgainButton.addEventListener('click', function () {
                location.reload();                                  //aggiorna tutta la pagina
            })
        } else {                                                    //altrimenti
            endRoundText.innerText = 'O WINS THE ROUND';            //O ha vinto il round
            endRoundScreen.classList.remove('hidden');
            playNextRound.addEventListener('click', resetGame); //resetto solo la griglia al click del bottone
        }
    }
}




/*-------------------------------
🟡 AGGIORNA LO SCORE DEL GIOCATORE X
-------------------------------*/
function updateScoreX() {
    scoreX++;
    vittorieX.innerText = scoreX < 10 ? '0' + scoreX : String(scoreX);
    console.log("punteggio X = " + scoreX);
}

/*-------------------------------
🔴 AGGIORNA LO SCORE DEL GIOCATORE O
-------------------------------*/
function updateScoreO() {
    scoreO++;
    vittorieO.innerText = scoreO < 10 ? '0' + scoreO : String(scoreO);
    console.log("punteggio O = " + scoreO);
}

/*-------------------------------
🟠 FUNZIONE PER RESETTARE LA GRIGLIA
 --------------------------------*/
function resetGame() {
    cells.forEach((cell) => {               //per ogni cella l'immagine di sfondo deve essere vuota
        cell.style.backgroundImage = '';          //l'immagine di sfondo deve essere vuota
    });
    countX = 0;                                  //resetto il contatore delle X
    countO = 0;                                  //resetto il contatore dei O
                                                /*
                                                resetto countX e countO per fare in modo che rimanga valida la condizione dell' if in caso di parità!
                                                se non lo facessi i contatori continuerebbero a superare il 5 e il 4, che sono i numeri massimi di X o O
                                                che può contenere la griglia e quindi al round successivo avrei countX o countO = 6 e questo non mi
                                                permetterebbe più di gestire il numero durante il round
                                                 */

    endRoundScreen.classList.add('hidden');     // riaggiungo la classe hidden alla schermata di fine round per nasconderla e ricominciare un altro round
    currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
}



