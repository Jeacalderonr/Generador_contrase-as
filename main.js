let cantidad= document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contraseña=document.getElementById('contrasena');
const  cadenaCarateres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar () {

    let numeroDigitado=parseInt(cantidad.value);
    
    if (numeroDigitado <8){
        alert("la cantidad de carateres tiene que ser mayor  que 8");
    }
    let password='';
    for(let i=0;i<numeroDigitado;i++){

        let caracterAleatorio=cadenaCarateres[ Math.floor( Math.random ()*cadenaCarateres.length)];
        console.log(caracterAleatorio)
        password+=caracterAleatorio;
       // console.log(cadenaCarateres[Math.floor(caracterAleatorio)]);
    }
    contrasena.value=password;
    
}












