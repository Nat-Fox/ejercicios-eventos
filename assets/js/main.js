// Agregar un addEventListener para el evento click, que llame a una función que al pinchar sobre el botón 
//aparezca el texto ¡HOLA MUNDO!

//Desde el HTML
/*function cambiarData() {
    var boton = document.getElementById('demo');
    boton.innerHTML = '<strong>' + '¡HOLA MUNDO!' + '<strong>';
}*/

//Desde el JS
var boton = document.getElementById('demo');
boton.addEventListener('click', function() {
    console.log('hiciste click en el botón');
    this.innerHTML = '<strong>' + '¡HOLA MUNDO!' + '<strong>';
});


//onload desde el HTML
function onLoadBody() {
    alert('La página esta cargada');
};

//load desde el JS
/*var body = document.getElementsByTagName('body')[0];
function onLoadBody() {
    alert('La página esta cargada');
};
body.addEventListener('load', onLoadBody());
*/


//onmouseout desde el HTML
function mouseOut() {
    alert('No estás sobre mi');
}

//mouseout desde el JS
/*var input = document.getElementById('input-text');
input.addEventListener('mouseout', function() {
    alert('No estás sobre mi');
});*/

//onmouseover desde el HTML
function mouseOver() {
    alert('Estás sobre mi');
}

//mouseover desde el JS
/*var input = document.getElementById('input-text');
input.addEventListener('mouseover', function() {
    alert('Estás sobre mi');
});*/