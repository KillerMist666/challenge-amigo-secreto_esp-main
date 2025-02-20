let amigos=[];
let textoIngresado=" ";

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
    if (textoIngresado!==""){
        console.log(`New: ${textoIngresado}`);
        nuevoAmigo=nombreMayuscula(textoIngresado);
        amigos.push(nuevoAmigo);
        document.getElementById("listaAmigos").innerHTML+=`<p>${nuevoAmigo}</p>`;
        console.log(amigos);
        document.getElementById("amigo").value="";
    }else{
        alert("Ingresaste un Nombre Invalido");
    };
};
