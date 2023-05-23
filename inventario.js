// Ingreso de Usuario - validación - Bienvenida
let usuario = prompt('Hola, somos Licorería Tres Hermanos, ingresa tu usuario:');

if ((usuario == 'Juan') || (usuario == 'juan') || (usuario == 'JUAN')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Pedro') || (usuario == 'pedro') || (usuario == 'PEDRO')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Ana') || (usuario == 'ana') || (usuario == 'ANA')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else if ((usuario == 'Mary') || (usuario == 'mary') || (usuario == 'MARY')) {
    alert('Acceso Permitido. \nBienvenido '+ usuario);
    ingresar();
} else {
    switch (usuario) {
        case '':
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Licorería Tres Hermanos, ingresa tu usuario:');
            break;
        case ' ':
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Licorería Tres Hermanos, ingresa tu usuario:');
            break;
        default:
            alert('Acceso Denegado');
            usuario = prompt('Hola, somos Licorería Tres Hermanos, ingresa tu usuario:');
            break;
    }
}
// Ingreso al sistema 
function ingresar() {
    alert('Ingresa y verifica el producto que necesites');
    
}

// Variables Globales
let stockBombay = 0;
let stockFernet = 0;
let stockJohnnie = 0;
let stockJackD = 0;
let stockAbsolute = 0;
let stockAguaC = 0;
let stockAguaS = 0;
let stockRedB = 0;
let stockCoca = 0;
let stockSprite = 0;

// Modificar bebidas 
let producto = prompt('1 - Bebidas C/Alcohol - Modificar\n2 - Bebidas S/Alcohol - Modificar\n3 - Salir');
    if (producto == '' || producto == ' ' || producto !== 1 || producto !== 2 || producto !== 3) {
    producto = prompt('1 - Bebidas C/Alcohol - Modificar\n2 - Bebidas S/Alcohol - Modificar\n3 - Salir');
    }
    
// Bebidas Con Alcohol 
while (producto == 1) {
    // Lista de bebidas con alcohol 
    let mostrarBebidasA = prompt('1- Bombay Sapphire. 750ml\n2- Fernet Branca. 750ml\n3 - Johnnie Walker Black Lebel. 750ml\n4 - Jack Daniels. 750ml\n5 - Absolut Vodka. 700ml');
    
    switch (mostrarBebidasA) {
        case '1':  
            let caso1 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso1 == '1') {
                alert('Agregaste Bombay Sapphire. 750ml al inventario');
                addBombay(1);
            } else{
                alert('Retiraste Bombay Sapphire. 750ml del inventario');
                removeBombay(1);
            }
            break;

        case '2':
        let caso2 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
        if (caso2 == '1') {
            alert('Agregaste Fernet Branca. 750ml al inventario');
            addFernet(1);
        } else{
            alert('Retiraste Fernet Branca. 750ml del inventario');
            removeFernet(1);
        }
        break;

        case '3':
            let caso3 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso3 == '1') {
                alert('Agregaste Johnnie Walker Black Lebel. 750ml al inventario');
                addJohnnie(1);
            } else{
                alert('Retiraste Johnnie Walker Black Lebel. 750ml del inventario');
                removeJohnnie(1);
            }
            break;

        case '4':
            let caso4 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso4 == '1') {
                alert('Agregaste Jack Daniels Whisky. 750ml al inventario');
                addJack(1);
            } else{
                alert('Retiraste Jack Daniels Whisky. 750ml del inventario');
                removeJack(1);
            }
            break;

        case '5':
            let caso5 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso5 == '1') {
                alert('Agregaste Absolut Vodka. 700ml al inventario');
                addAbsolute(1);
            } else{
                alert('Retiraste Absolut Vodka. 700ml del inventario');
                removeAbsolute(1);
            }
            break;
            default:
                alert('No estas agregando nada');
                break;
    }
    let aviso = prompt('¿Quieres seguir agregando stock? (1 ó s para salir)')
    producto = prompt('1 - Bebidas Alcoholicas - Modificar\n2 - Bebidas S/A - Modificar\n3 - Salir');
}
// Bebidas Sin Alcohol
while (producto == 2) {
    // Lista Bebidas Sin Alcohol
    let mostrarBebidasB = prompt('1- Agua s/Gas. 500ml\n2- Agua C/Gas. 500ml\n3 - Energy Drink Red Bull. 250ml\n4 - Gaseosa Coca Cola. 500ml\n5 - Gaseosa Sprite. 500ml');
    
    switch (mostrarBebidasB) {  
        case '1':
            let caso1 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso1 == '1') {
                alert('Agregaste Agua s/Gas. 500ml al inventario');
                addAguaS(1);
            } else{
                alert('Retiraste Agua s/Gas. 500ml del inventario');
                removeAguaS(1);
            }
            break;
        
        case '2':
        let caso2 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
        if (caso2 == '1') {
            alert('Agregaste Agua C/Gas. 500ml al inventario');
            addAguaC(1);
        } else{
            alert('Retiraste Agua C/Gas. 500ml del inventario');
            removeAguaC(1);
        }
        break;
        case '3':
            let caso3 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso3 == '1') {
                alert('Agregaste Energy Drink Red Bull. 250ml al inventario');
                addRedBull(1);
            } else{
                alert('Retiraste Energy Drink Red Bull. 250ml del inventario');
                removeRedBull(1);
            }
            break;
        case '4':
            let caso4 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso4 == '1') {
                alert('Agregaste Gaseosa Coca Cola. 500ml al inventario');
                addCocaCola(1);
            } else{
                alert('Retiraste Gaseosa Coca Cola. 500ml del inventario');
                removeCocaCola(1);
            }
            break;
        case '5':
            let caso5 = prompt('1- Para sumar a inventario\n2 - Para retirar de inventario');
            if (caso5 == '1') {
                alert('Agregaste Gaseosa Sprite. 500ml al inventario');
                addSprite(1);
            } else{
                alert('Retiraste Gaseosa Sprite. 500ml del inventario');
                removeSprite(1);
            }
            break;
            default:
                alert('No estas agregando nada');
                break;
    }
    let aviso = prompt('¿Quieres seguir agregando stock? (1 - s para salir)')
    producto = prompt('1 - Bebidas Alcoholicas - Modificar\n2 - Bebidas S/A - Modificar\n3 - Salir');
}

// Funciones Sumas/Restas Inventario Bebidas Alcoholicas
// stock Bombay 
function addBombay(suma) {
    stockBombay = stockBombay += suma;
    alert('Stock hasta la fecha es de: '+stockBombay);
}

function removeBombay(resta) {
    stockBombay = stockBombay -= resta;
    alert('Stock hasta la fecha es de: '+stockBombay);
}

// stock Fernet 
function addFernet(suma) {
    stockFernet = stockFernet += suma;
    alert('Stock hasta la fecha es de: '+stockFernet);
}

function removeFernet(resta) {
    stockFernet = stockFernet -= resta;
    alert('Stock hasta la fecha es de: '+stockFernet);
}

// stock Johnnie Walker 
function addJohnnie(suma) {
    stockJohnnie = stockJohnnie += suma;
    alert('Stock hasta la fecha es de: '+stockJohnnie);
}

function removeJohnnie(resta) {
    stockJohnnie = stockJohnnie -= resta;
    alert('Stock hasta la fecha es de: '+stockJohnnie);
}

// stock Jack Daniel's 
function addJack(suma) {
    stockJackD = stockJackD += suma;
    alert('Stock hasta la fecha es de: '+stockJackD);
}
function removeJack(resta) {
    stockJackD = stockJackD -= resta;
    alert('Stock hasta la fecha es de: '+stockJackD);
}

// stock Absolute 
function addAbsolute(suma) {
    stockAbsolute = stockAbsolute += suma;
    alert('Stock hasta la fecha es de: '+stockAbsolute);
}
function removeAbsolute(resta) {
    stockAbsolute = stockAbsolute -= resta;
    alert('Stock hasta la fecha es de: '+stockAbsolute);
}

// Funciones Sumas/Restas Inventario Bebidas S/Alcohol
// stock Agua Con Gas 
function addAguaC(suma) {
    stockAguaC = stockAguaC += suma;
    alert('Stock hasta la fecha es de: '+stockAguaC);
}

function removeAguaC(resta) {
    stockAguaC = stockAguaC -= resta;
    alert('Stock hasta la fecha es de: '+stockAguaC);
}
// stock Agua Sin Gas 
function addAguaS(suma) {
    stockAguaS = stockAguaS += suma;
    alert('Stock hasta la fecha es de: '+stockAguaS);
}

function removeAguaS(resta) {
    stockAguaS = stockAguaS -= resta;
    alert('Stock hasta la fecha es de: '+stockAguaS);
}
// stock Red Bull 
function addRedBull(suma) {
    stockRedB = stockRedB += suma;
    alert('Stock hasta la fecha es de: '+stockRedB);
}

function removeRedBull(resta) {
    stockRedB = stockRedB -= resta;
    alert('Stock hasta la fecha es de: '+stockRedB);
}
// stock Coca Cola 
function addCocaCola(suma) {
    stockCoca = stockCoca += suma;
    alert('Stock hasta la fecha es de: '+stockCoca);
}

function removeCocaCola(resta) {
    stockCoca = stockCoca -= resta;
    alert('Stock hasta la fecha es de: '+stockCoca);
}
// stock Sprite
function addSprite(suma) {
    stockSprite = stockSprite += suma;
    alert('Stock hasta la fecha es de: '+stockSprite);
}

function removeSprite(resta) {
    stockSprite = stockSprite -= resta;
    alert('Stock hasta la fecha es de: '+stockSprite);
}