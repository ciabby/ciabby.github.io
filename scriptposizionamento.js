let chipiazza = parseInt(0); //variabile usata per decidere chi piazza
let barchePiazzateGiocatore1 = parseInt(0);
let barchePiazzateGiocatore2 = parseInt(0);
//funzione che si occupa di inizializzare le celle
function inizializzaCelle() {
    const celle = document.querySelectorAll("td");
    celle.forEach(cell => {
        if(chipiazza%2==0)
            {
        cell.classList.add("libereGiocatore1");
        cell.classList.remove("occupateGiocatore1");
            }
        else if(chipiazza%2==1)
            {
        cell.classList.add("libereGiocatore2");
        cell.classList.remove("occupateGiocatore2");
            }
    });
}
//fine della funzione



//funzione di posizionamento delle barche con metodo drag and drop
// con anche orientamento delle barche con utilizzo della rotella

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

    if (orientamento === "orizzontale") {
        if (cellIndex + length - 1 > 10) {
            alert("Non c'è abbastanza spazio per posizionare la barca orizzontalmente!");
            return;
        }

        for (let i = 0; i < length; i++) {
            const targetCell = table.children[rowIndex].children[cellIndex + i];
            if (targetCell.children.length > 0) {
                alert("Spazio occupato, scegli un'altra posizione");
                return;
            }
        }

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
            targetCell.classList.add("occupateGiocatore");
        }

    } else if (orientamento === "verticale") {
        if (rowIndex + length - 1 > 10) {
            alert("Non c'è abbastanza spazio per posizionare la barca verticalmente!");
            return;
        }

        for (let i = 0; i < length; i++) {
            const targetRow = table.children[rowIndex + i];
            const targetCell = targetRow.children[cellIndex];
            if (targetCell.children.length > 0) {
                alert("Spazio occupato, scegli un'altra posizione");
                return;
            }
        }

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
            targetCell.classList.add("occupateGiocatore1");
        }
    }
    if(chipiazza%2==0)
        {
    boat.style.display = "none";
    barchePiazzateGiocatore1 += 1;
    Campo();
    alert("Barche piazzate: " + barchePiazzateGiocatore1);
        }
    else if(chipiazza%2==1)
        {
    boat.style.display = "none";
    barchePiazzateGiocatore2 += 1;
    Campo();
    alert("Barche piazzate: " + barchePiazzateGiocatore2);
        }
}
//fine della funzione


//funzione che si occupa del utilizzo del bottone "in game"
function Campo() 
{
    if (barchePiazzateGiocatore1 < 5) {
       document.getElementById("ingame").disabled = true;
        if(barchePiazzateGiocatore1==0)
            {
                alert("Devi posizionare tutte le barche prima di poter giocare");
            }
    } else if(barchePiazzateGiocatore1 == 5 ){
        
        document.getElementById("ingame").disabled = false;
        document.getElementById("ingame").onclick = function () {
        window.location.href = "paginadigioco.html";
            };
    }
}
//fine della funzione

//inizializzazione delle celle
document.addEventListener("DOMContentLoaded", function () {
    inizializzaCelle();
});