// requiere las librerias pertinentes
const https = require("https");  // Importa el módulo 'https' para hacer solicitudes HTTPs.
const fs = require("fs");        // Importa el módulo 'fs' para operaciones de sistema de archivos.
const crypto = require("crypto");  // Importa el módulo 'crypto' para operaciones criptográficas.

const start = Date.now();  // Registra el tiempo actual en 'start'.

function doRequest() {
  // Realiza una solicitud HTTPS a "https://www.google.com".
  https
    .request("https://www.google.com", (res) => {
      // Escucha el evento 'data' (datos recibidos), pero no hace nada con ellos.
      res.on("data", () => {});
      // Escucha el evento 'end' (finalización de la respuesta).
      res.on("end", () => {
        // Imprime el tiempo transcurrido desde 'start' hasta ahora.
        console.log("HTTPS: ", Date.now() - start);
      });
    })
    .end();  // Finaliza la solicitud HTTPS.
}

function getHash() {
  // Realiza una operación criptográfica utilizando pbkdf2.
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    // Imprime el tiempo transcurrido desde 'start' hasta ahora después de completar la operación criptográfica.
    console.log("Hash: ", Date.now() - start);
  });

  // Llama a la función 'doRequest' para hacer la solicitud HTTPS.
  doRequest();

  // Lee el archivo "multitask.js" de forma asincrónica en modo texto.
  fs.readFile("multitask.js", "utf8", () => {
    // Imprime el tiempo transcurrido desde 'start' hasta ahora después de completar la lectura del archivo.
    console.log("FS: ", Date.now() - start);
  });
}



