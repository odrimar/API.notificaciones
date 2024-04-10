//crear los selectores
//son notificaciones nativas de js y a su vez se pueden tomar del navegador
const notificarBtn = document.querySelector('#notificar');

const verNoti = document.querySelector('#verNotificacion');
//evento
notificarBtn.addEventListener('click',()=>{
    //en este paso se solicitan los permisos al usuario
    //mediante el API de notoficaciones de Js
    Notification.requestPermission().then(resultado =>{
        console.log('El resultado es: ',resultado)
    })
})

verNoti.addEventListener('click',()=>{
    if(Notification.permission === 'granted'){
        const notificaciones = new Notification('Aqui esta la notificacion',{
            icon:'../img/img.png',
            body:'enviando notificacion'
        });

        notificaciones.onclick = function(){
            window.open('https://google.com');
        }
    }
})