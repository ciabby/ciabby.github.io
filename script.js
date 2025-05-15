let contatore = parseInt(0);

let orientamento = "orizzontale"; // Imposta il valore iniziale dell'orientamento
function ideadigioco() {
    alert("Volevamo creare un gioco abbastanza tranquillo, in grado di far divertire tutti i giocatori quindi che dire....");
    alert("Buon divertimento");
}

function comecisonoarrivato() {
    alert("è nato tutto per un progetto scolastico per poi essere uscito alla fine come: ' una idea troppo carina per essere lasciata cosi ' , quindi eccoci");
}

function chisono() {
    alert("Emmanuele Loghitano ");
}

function dadovevengo() {
    alert("Dall'Abramo Lincoln di Enna, settore informatica e telecomunicazioni");
}

function informazioni() {
    if (contatore % 2 == 0) {
        document.getElementById("info").style.border = "5px solid black";
        document.getElementById("info").style.borderRadius = "20% 5% 20% 5%";
        document.getElementById("info").style.color = "black";
        document.getElementById("info").textContent = "il gioco consiste nel riuscire ad abbattere tutte le barche avversarie riuscendo a trovarle tramite la posizione delle caselle";
        document.getElementById("info").style.display = "inline";
        var oImg = document.createElement("img");
        oImg.setAttribute('src', 'x.png');
        oImg.setAttribute('id', 'x');
        oImg.setAttribute('onclick', '(elimina)');
        document.body.appendChild(oImg);
    } else if (contatore % 2 == 1) {
        document.getElementById("info").style.display = "none";
    }
    contatore += 1;
}

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        orientamento = "orizzontale";
    } else if (event.deltaY < 0) {
        orientamento = "verticale";
    }
    alert("Orientamento attuale: "+orientamento);
});

function giocaamico()
{
    giocacon=1;
}
function giocabot()
{
    giocacon=2;
}
    
