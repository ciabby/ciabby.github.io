let contatore = parseInt(0);
let BarchePiazzate = parseInt(0);
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

// ——— Gestione del Drag & Drop con Orientamento ———
function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const boatId = ev.dataTransfer.getData("text");
    const boat = document.getElementById(boatId);
    const length = parseInt(boat.dataset.length);

    const cell = ev.target.closest('th');
    if (!cell) return;

    const row = cell.parentElement;
    const table = row.parentElement;
    const rowIndex = Array.from(table.children).indexOf(row); // 1-10
    const cellIndex = Array.from(row.children).indexOf(cell); // 1-10

    // Controllo se c'è abbastanza spazio in base all'orientamento
    if (orientamento === "orizzontale") {
        if (cellIndex + length - 1 > 10) {
            alert("Non c'è abbastanza spazio per posizionare la barca orizzontalmente!");
            return;
        }

        // Verifica che tutte le celle orizzontali siano vuote
        for (let i = 0; i < length; i++) {
            const targetCell = table.children[rowIndex].children[cellIndex + i];
            if (targetCell.children.length > 0) {
                alert("Spazio occupato, scegli un'altra posizione");
                return;
            }
        }

        // Posiziona la barca orizzontale
        for (let i = 0; i < length; i++) {
            const targetCell = table.children[rowIndex].children[cellIndex + i];
            const boatPart = boat.cloneNode(true);
            boatPart.removeAttribute("draggable");
            boatPart.style.width = "100%";
            boatPart.style.height = "100%";
            boatPart.style.objectFit = "cover";
            boatPart.id = boatId + "_part" + i;
            targetCell.appendChild(boatPart);
            targetCell.setAttribute("data-part", boatId);
            targetCell.classList.add("occupate");  // Aggiungi classe "occupate"
        }

    } else if (orientamento === "verticale") {
        if (rowIndex + length - 1 > 10) {
            alert("Non c'è abbastanza spazio per posizionare la barca verticalmente!");
            return;
        }

        // Verifica che tutte le celle verticali siano vuote
        for (let i = 0; i < length; i++) {
            const targetRow = table.children[rowIndex + i];
            const targetCell = targetRow.children[cellIndex];
            if (targetCell.children.length > 0) {
                alert("Spazio occupato, scegli un'altra posizione");
                return;
            }
        }

        // Posiziona la barca verticale
        for (let i = 0; i < length; i++) {
            const targetRow = table.children[rowIndex + i];
            const targetCell = targetRow.children[cellIndex];
            const boatPart = boat.cloneNode(true);
            boatPart.removeAttribute("draggable");
            boatPart.style.width = "100%";
            boatPart.style.height = "100%";
            boatPart.style.objectFit = "cover";
            boatPart.id = boatId + "_part" + i;
            targetCell.appendChild(boatPart);
            targetCell.setAttribute("data-part", boatId);
            targetCell.classList.add("occupate");  // Aggiungi classe "occupate"
        }
    }

    // Rimuoviamo la barca originale dalla lista delle barche disponibili
    boat.style.display = "none";

    BarchePiazzate += 1;
    alert("Barche piazzate: " + BarchePiazzate);
}

// ——— Cambia orientamento con la rotella del mouse ———
document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        orientamento = "orizzontale";
    } else if (event.deltaY < 0) {
        orientamento = "verticale";
    }
    console.log("Orientamento attuale:", orientamento);
});

// Funzione per inizializzare le celle libere
function inizializzaCelle() {
    const celle = document.querySelectorAll("td");
    celle.forEach(cell => {
        cell.classList.add("libere");  // Aggiungi la classe "libere" a tutte le celle vuote
        cell.classList.remove("occupate");  // Rimuovi la classe "occupate" se presente
    });
}

// Chiama la funzione inizializzaCelle al caricamento della pagina
document.addEventListener("DOMContentLoaded", inizializzaCelle);
