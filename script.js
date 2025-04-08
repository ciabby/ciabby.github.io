let contatore=parseInt(0);
let BarchePiazzate=parseInt(0);
function ideadigioco()
{
    alert("Volevamo creare un gioco abbastanza tranquillo, in grado di far divertire tutti i giocatori quindi che dire....");
    alert("Buon divertimento");
}
function comecisonoarrivato()
{
    alert("è nato tutto per un progetto scolastico per poi essere uscito alla fine come: ' una idea troppo carina per essere lasciata cosi ' , quindi eccoci");
}
function chisono()
{
    alert("Emmanuele Loghitano ");
}
function dadovevengo()
{
    alert("Dall'Abramo Lincoln di Enna, settore informatica e telecomunicazioni");
}
function informazioni()
{
    if(contatore%2==0)
     {
        document.getElementById("info").style.border="5px solid black";
        document.getElementById("info").style.borderRadius="20% 5% 20% 5%";
        document.getElementById("info").style.color="black";
        document.getElementById("info").textContent="il gioco consiste nel riuscire ad abbattere tutte le barche avversarie riuscendo a trovarle tramite la posizione delle caselle";
        document.getElementById(x).style.display="flex";
        var oImg = document.createElement("img");
        oImg.setAttribute('src', 'x.png');
        oImg.setAttribute('id','x');
        oImg.setAttribute('onclick(elimina)');
        document.body.appendChild(oImg);   
    }
    else if(contatore%2==1)
    {
       document.getElementById("info").style.display="none";
    }
    contatore+=1;
}


function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
    BarchePiazzate+=1;
    alert(BarchePiazzate);
}
