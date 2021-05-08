// Pregunta al navegador si cuenta con esta caracteristica y lo cargara 
if("serviceWorker" in navigator){
    // Registramos nuestro serviceWorker
    navigator.serviceWorker.register("./sw.js").then(
        reg=>console.log("registro Exitoso")
    ).catch(
        err => console.log(err)
    )
}