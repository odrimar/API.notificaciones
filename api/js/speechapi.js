const microfono = document.querySelector( '#microfono' );
const salida = document.querySelector( '#salida' );

microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI() {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();
    
    //para comenzar el reconocimiento por voz

    recognition.start();

    recognition.onstart = function(){
        //console.log('comence a escuchar');
       salida.classList.add("mostrar"); 
        salida.innerHTML='Escuchando...';

    }

// esto me va a retornar lo que haya reconocido al momento de inicializar es speechapi
    recognition.onspeechend = function(e){

        salida.innerHTML='se termino de ejecutar el reconocimiento';
       

    }
   recognition.onresult = function(e){
    console.log(e.results);

let transcript = e.results[0][0].transcript;
let confidence = e.results[0][0].confidence; 

const speech = document.createElement('p');
speech.innerHTML = `Lo que grabe ${transcript}`;

const confianza = document.createElement('p');
confianza.innerHTML=`Confianza:${parseInt(confidence*100)}% `;

salida.appendChild(speech);
salida.appendChild(confianza);
}

}