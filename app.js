let amigos=[];
let textoIngresado="";
let amigoSorteado=false;

function reiniciarJuego(){
    document.getElementById("listaAmigos").innerHTML="";
    amigos=[];
};
function nombreMayuscula(nombreIngresado){
    return nombreIngresado
    .toLowerCase()
    .split(" ")
    .map(nombreSolo=>nombreSolo.charAt(0).toUpperCase()+nombreSolo.slice(1))
    .join(" ");
};
function agregarAmigo(){
    let nuevoAmigo="";
    textoIngresado=document.getElementById("amigo").value;
    if (amigoSorteado==true){
        reiniciarJuego();
        amigoSorteado=false;
    };
    if (textoIngresado!==""){
        console.log(`New: ${textoIngresado}`);
        nuevoAmigo=nombreMayuscula(textoIngresado);
        amigos.push(nuevoAmigo);
        console.log(amigos);
        document.getElementById("listaAmigos").innerHTML+=`<li>${nuevoAmigo}</li>`;
        document.getElementById("amigo").value="";
    }else{
        alert("Ingresaste un Nombre Invalido");
    };
};
function sortearAmigo(){
    const indiceAmigo=Math.floor(Math.random()*amigos.length);
    console.log(`Amigo secreto: ${amigos[indiceAmigo]}`);
    document.getElementById("listaAmigos").innerHTML=`<li>El Amigo Secreto es:</li><li>${amigos[indiceAmigo]}</li>`;
    amigoSorteado=true;
};
