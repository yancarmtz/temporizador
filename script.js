const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image'); 
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const botonIniciarPause = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span');
const botonComenzarPausar = document.querySelector('.app__card-primary-butto-icon');
const tiempoEnPantalla = document.querySelector('#timer');

// crea un nuevo elemento de audio en JavaScript. La variable "musica" 
// almacena un nuevo objeto de audio que carga el archivo de audio "luna-rise-part-one.mp3"
// desde la carpeta "sonidos" en el directorio actual. Una vez que este objeto de audio está creado, 
// puedes utilizar sus métodos y propiedades para controlar la reproducción de la música, como 
// reproducir, pausar, detener, ajustar el volumen, entre otros. 
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');

const audioplay = new Audio('./sonidos/play.wav');
const audiopause = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

// RESUMEN DEL SIGUIENTE CODIGO MUSICA:
//La línea musica.loop = true; establece la propiedad loop del objeto musica en true, 
//lo que significa que la música se reproducirá en bucle, es decir, 
//se repetirá continuamente una vez que comience a reproducirse.
//
//La siguiente parte del código utiliza un event listener para detectar cuando el input de música cambia. 
//Cuando el input cambia, se ejecuta una función de flecha (arrow function) que verifica si la música 
//está pausada. Si la música está pausada, se reproduce; de lo contrario, se pausa.
//
//En resumen, este código permite que la música se reproduzca en bucle 
//y controla su reproducción o pausa según el estado actual. 
//
// PONE EN UN LOOP LA MUSICA
musica.loop = true;
// VALIDA CUANDO EL CHECKBOX MUSICA ESTA ACTIVO ES DECIR " CHANGE " CAMBIA
inputEnfoqueMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

// 1.-botonCorto.addEventListener('click', () => { cambiarContexto('descanso-corto'); });:
// Aquí se está añadiendo un event listener al botón con el id botonCorto. 
// Cuando se hace clic en este botón, se ejecutará la función cambiarContexto('descanso-corto').
//
// 2.-botonEnfoque.addEventListener('click', () => { cambiarContexto('enfoque'); });: 
// Similar al anterior, aquí se añade un event listener al botón con el id botonEnfoque. 
// Cuando se hace clic en este botón, se ejecutará la función cambiarContexto('enfoque').
//
// 3.-botonLargo.addEventListener('click', () => { cambiarContexto('descanso-corto'); });: 
// En este caso, parece que hay un error, ya que el botónLargo debería llamar a 
// cambiarContexto('descanso-largo') en lugar de cambiarContexto('descanso-corto').
//
// 4.-function cambiarContexto(contexto){...}: Aquí se define la función cambiarContexto que 
// recibe un parámetro contexto. Dentro de esta función, se establece el atributo data-contexto 
// del elemento html con el valor del parámetro contexto. Luego, se cambia el atributo src del 
// elemento banner para que muestre la imagen correspondiente al contexto, utilizando template 
// strings para construir el camino de la imagen de forma dinámica.
//
// En resumen, este código añade event listeners a tres botones diferentes.
// Cuando se hace clic en cada botón, se ejecuta la función cambiarContexto 
// con un parámetro específico, lo que cambia el contexto y la imagen mostrada 
// en el banner. Sin embargo, hay un error en el botónLargo que debería llamar 
// a cambiarContexto('descanso-largo').

botonCorto.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');

    console.log(botonCorto.classList);
});


botonEnfoque.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
    
    console.log(botonEnfoque.classList);
});


botonLargo.addEventListener('click', () => {
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
   
    console.log(botonLargo.classList);
});



// 1.- botones.forEach(function(contexto) { contexto.classList.remove('active'); }): Esta parte del código utiliza 
//     el método forEach para iterar sobre cada elemento del array botones.
//     Dentro de la función de callback del forEach, se accede al elemento actual a través del parámetro contexto. 
//     Luego, se utiliza el método classList.remove para eliminar la clase 'active' de cada elemento.
//
// 2.- html.setAttribute('data-contexto',contexto): Aquí se utiliza el método setAttribute para establecer 
//     el atributo data-contexto del elemento html con el valor del parámetro contexto.
//
// 3.- banner.setAttribute('src',./imagenes/${contexto}.png): En esta línea, se utiliza el método 
//     setAttribute para establecer el atributo src del elemento banner con la ruta de la imagen correspondiente al contexto.
//
// 4.- switch (contexto) { ... }: Este es un bloque switch que evalúa el valor de contexto 
//     y ejecuta el código correspondiente al caso que coincida. 
//     Dependiendo del valor de contexto, se actualiza el contenido del elemento titulo con un mensaje específico.
//
// En resumen, la función cambiarContexto se encarga de realizar varias acciones al cambiar el contexto. 
// Primero, limpia el resaltado de los botones, luego actualiza los atributos y contenido de ciertos 
// elementos en la página según el contexto proporcionado.
//
function cambiarContexto(contexto){

    mostrarTiempo();

    // El método forEach para iterar sobre cada elemento del array botones.
    botones.forEach(function(contexto) {
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src',`./imagenes/${contexto}.png`)


    switch (contexto) {
        case "enfoque":
            // SE MODIFICARA EL TEXTO CUANDO contexto sea igual a enfoque, innerHTML 
            // permite agregar codigo html junto con el texto.
            titulo.innerHTML = ` Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
            break;
        case "descanso-corto":  
            titulo.innerHTML = `¿Qué tal tomar un respiro?<br>
            <strong class="app__title-strong">¡Haz una pausa corta!</strong>`;
            break;
        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie<br>
            <strong class="app__title-strong">Haz una pausa larga.</strong>`;
            break; 
        default:
            break;        
    }
}

//******************************************************************************** */
// E X P L I C A C I O N  D E  L A  F U N C I O N  cuentaRegresiva:
// La función cuentaRegresiva es una función de flecha que no recibe parámetros, ya que los paréntesis están vacíos (). 
// Al principio de la función, se verifica si el tiempoTranscurridoEnSegundos es menor o igual a 0. Si esta condición se cumple,
// se reproduce el sonido audioTiempoFinalizado y se llama a la función reiniciar(). Después de llamar a reiniciar(), 
// la función termina con la palabra clave return.
//
// Si la condición tiempoTranscurridoEnSegundos <= 0 no se cumple, entonces el valor de tiempoTranscurridoEnSegundos
// se reduce en 1 unidad. Luego se imprime en la consola el mensaje "Temporizador:" 
// seguido del valor actual de tiempoTranscurridoEnSegundos.
//
// Es importante destacar que el código hace uso de variables que no están definidas en el fragmento proporcionado, 
// como tiempoTranscurridoEnSegundos y audioTiempoFinalizado. Estas variables deben estar definidas en otro
// lugar del código para que esta función funcione correctamente.
const cuentaRegresiva = () => {
    //alert('3.funcion cuentaRegresiva');
    if(tiempoTranscurridoEnSegundos <= 0) {
        audioTiempoFinalizado.play();

        reiniciar(); 
      //  alert('4.tiempo final');
        return;
    }

    //El método " setAttribute "" se utiliza para establecer el valor de un atributo en un elemento HTML. 
    //Por ejemplo, si deseas establecer el atributo "id" de un elemento, puedes usar setAttribute("id", "miId").
    // Este método es útil cuando necesitas manipular elementos del DOM y modificar sus atributos de forma dinámica. 
    botonComenzarPausar.setAttribute('src','./imagenes/pause.png')

    textoIniciarPausar.textContent = "Pausar";

    tiempoTranscurridoEnSegundos -= 1;

    mostrarTiempo();

    console.log('Temporizador:' + tiempoTranscurridoEnSegundos);
}
//****************************************************************************** */

// E X P L I C A C I O N  D E  L O  S I G U I E N T E:
// La instrucción botonIniciarPause.addEventListener('click', iniciarPausar); se encarga de agregar un "escuchador de eventos" 
// al botón botonIniciarPause. Esto significa que se está configurando el botón para que "escuche" cuando se haga clic en él.
//
//Cuando se hace clic en el botón botonIniciarPause, se activará la función iniciarPausar.
// La función iniciarPausar se ejecutará en respuesta a este evento de clic.
//
//En resumen, esta instrucción establece que cuando se haga clic en el botón botonIniciarPause,
//se llamará a la función iniciarPausar.
botonIniciarPause.addEventListener('click', iniciarPausar);

/***************************************************************************************** */

//La función iniciarPausar es una función que se ejecuta cuando se hace clic en el botón botonIniciarPause, 
//ya que está vinculada a ese evento.
//
//Dentro de la función, se realiza una verificación condicional. Si la variable idIntervalo
//tiene un valor (es decir, si no es null o undefined), se ejecutan las siguientes acciones:
//
//1.-Se reproduce el sonido audiopause.
//2.-Se muestra una alerta con el mensaje "idIntervalo: " seguido del valor de idIntervalo.
//3.-Se llama a la función reiniciar().
//4.-La función termina con la palabra clave return.
//
//Si la condición if(idIntervalo) no se cumple, es decir, si idIntervalo no tiene un valor, se ejecutan las siguientes acciones:
//
//1.-Se reproduce el sonido audioplay.
//2.-Se utiliza setInterval para llamar a la función cuentaRegresiva cada 1000 milisegundos (1 segundo) 
//   y se asigna el valor devuelto por setInterval a la variable idIntervalo.
//3.-En resumen, esta función alterna entre reproducir sonidos, mostrar alertas y llamar 
//   a la función reiniciar dependiendo del valor de idIntervalo. Además, establece un intervalo para 
//   llamar a la función cuentaRegresiva cada segundo si idIntervalo no tiene un valor.
function iniciarPausar() {
   // alert('1.entra funcion iniciarPausar');
    if(idIntervalo) {
        audiopause.play();
        alert('idIntervalo: ' + idIntervalo);
        reiniciar();
        return;
    }
    audioplay.play();

    idIntervalo = setInterval(cuentaRegresiva, 1000);
}

/********************************************************************************************************************************* */

//La función clearInterval se utiliza para detener la ejecución de un intervalo que se ha establecido 
//previamente con la función setInterval. Al llamar a clearInterval y 
//pasarle como argumento el identificador del intervalo que se desea detener, 
//se detiene la ejecución repetida de la función que se había establecido 
//para ser llamada a intervalos regulares.
//
//Por otro lado, la asignación de null a la variable idIntervalo tiene como propósito 
//indicar que no hay un intervalo activo en ese momento. Esto es útil para controlar
//el estado del intervalo y asegurarse de que no se esté ejecutando más de un
//intervalo al mismo tiempo.
//
//En resumen, la combinación de clearInterval y la asignación de null a idIntervalo en la
//función reiniciar se encarga de detener y limpiar el intervalo activo, asegurando que
//no se ejecute más y que el estado del intervalo quede correctamente controlado.
function reiniciar() {
  //  alert('2.funcion reiniciar');
  //
  //La función clearInterval se utiliza en JavaScript para detener la ejecución de un 
  //intervalo que se ha establecido previamente con la función setInterval. 
  //
  //Al llamar a clearInterval y pasarle como argumento el identificador del 
  //intervalo que se desea detener, se detiene la ejecución repetida de
  //la función que se había establecido para ser llamada a intervalos regulares.
  //
  //En resumen, clearInterval es útil para detener la ejecución de un intervalo 
  //que se ha establecido previamente, lo que permite controlar y 
  //detener la repetición de una función a intervalos regulares.
    clearInterval(idIntervalo);
    idIntervalo = null;
    
    //El método " setAttribute "" se utiliza para establecer el valor de un atributo en un elemento HTML. 
    //Por ejemplo, si deseas establecer el atributo "id" de un elemento, puedes usar setAttribute("id", "miId").
    // Este método es útil cuando necesitas manipular elementos del DOM y modificar sus atributos de forma dinámica. 
    botonComenzarPausar.setAttribute('src','./imagenes/play_arrow.png')

    textoIniciarPausar.textContent = "Comenzar";
}


function mostrarTiempo() {
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleString('es-MX',{minute:'2-digit',second:'2-digit'});
    tiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

mostrarTiempo();