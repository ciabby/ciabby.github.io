let giocacon = parseInt(0); //variabile usata per capire con chi gioca

//funzione che si occupa di visualizzare contro chi giochi
function visualizzacontrochigiochi()
{
        if(giocacon==1)
            {
                document.getElementById("iconagiocatore2").style.display="inline";
                document.getElementById("iconabot").style.display="none";
            }
        else if(giocacon==2)
            {
                document.getElementById("iconabot").style.display="inline";
                document.getElementById("iconagiocatore2").style.display="none";
            }
}

//funzione che verifica le celle cliccate
function controllaCellaCliccata(event) {
    const cella = event.target.closest('td,th');
    if (!cella) return;

    const riga = cella.parentElement;
    const tabella = riga.parentElement;
    const rigaIndex = Array.from(tabella.children).indexOf(riga);
    const colonnaIndex = Array.from(riga.children).indexOf(cella);
    let colonne;
    switch(colonnaIndex)
        {
            default:
                colonne=" ";
                break;
            case 1:
                colonne="a";
                break;
            case 2:
                colonne="b";
                break;
            case 3:
                colonne="c";
                break;
            case 4:
                colonne="d";
                break;
            case 5:
                colonne="e";
                break;
            case 6:
                colonne="f";
                break;
            case 7:
                colonne="g";
                break;
            case 8:
                colonne="h";
                break;
            case 9:
                colonne="i";
                break;
            case 10:
                colonne="j";
                break;
        }

    const posizione = `(${rigaIndex }, ${colonne})`;

    if (cella.children.length > 0 || cella.classList.contains("occupateGiocatore1")) {
        alert(`la casella ${posizione} è occupata.`);
    } else {
        alert(`la casella ${posizione} è vuota.`);
    }
    document.getElementById("barchebot").style.content=barchePiazzateGiocatore2;
    ocument.getElementById("barcheplayer2").style.content=barchePiazzateGiocatore2;
    ocument.getElementById("barcheplayer1").style.content=barchePiazzateGiocatore1;
}
//fine funzione di controllo celle cliccate

//metodo che avvia le funzioni al caricamento della pagina
document.addEventListener("DOMContentLoaded", function () {
    
        visualizzacontrochigiochi();
    
        document.querySelectorAll("td,th").forEach(td => {
        td.addEventListener("click", controllaCellaCliccata);
    });
});

