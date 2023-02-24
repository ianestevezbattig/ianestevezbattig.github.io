var Modonoche = 1;
document.querySelector("#boton1").addEventListener("click", () => {
    document.querySelector('.cuerpo').style.backgroundColor ='white';
    document.querySelector('.cuerpo').style.color ='black';
    document.querySelector('.a1').style.color ='black';
    document.querySelector('.a2').style.color ='black';
    document.querySelector('.a3').style.color ='black';
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "inline";
    Modonoche= 1
});

document.querySelector("#boton2").addEventListener("click", () => {
    document.querySelector('.cuerpo').style.backgroundColor ='black';
    document.querySelector('.cuerpo').style.color ='silver';
    document.querySelector('.a1').style.color ='silver';
    document.querySelector('.a2').style.color ='silver';
    document.querySelector('.a3').style.color ='silver';
    document.getElementById("boton1").style.display = "inline";
    document.getElementById("boton2").style.display = "none";
    Modonoche= 0
});
if (Modonoche=1) {
    document.querySelector('.cuerpo').style.backgroundColor ='white';
    document.querySelector('.cuerpo').style.color ='black';
    document.querySelector('.a1').style.color ='black';
    document.querySelector('.a2').style.color ='black';
    document.querySelector('.a3').style.color ='black';
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "inline";
} else{
    document.querySelector('.cuerpo').style.backgroundColor ='black';
    document.querySelector('.cuerpo').style.color ='silver';
    document.querySelector('.a1').style.color ='silver';
    document.querySelector('.a2').style.color ='silver';
    document.querySelector('.a3').style.color ='silver';
    document.getElementById("boton1").style.display = "inline";
    document.getElementById("boton2").style.display = "none";  
}