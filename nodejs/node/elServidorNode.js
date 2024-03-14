const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.setHeader("Access-Control-Allow-Methods", "GET, POST"); // Permitir los métodos GET y POST
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Permitir el encabezado Content-Type
  if (req.url === "/proceso1") {
    setTimeout(() => {
      res.setHeader("Content-Type", "application/javascript");
      res.end("Se ejecutó el procedimiento 1");
    }, 2000); // Simular un retraso de 2 segundos
  } else if (req.url === "/proceso2") {
    res.setHeader("Content-Type", "application/javascript");
    res.end("Se ejecutó el procedimiento 2");
  } else {
    res.statusCode = 404;
    res.end("Ruta no encontrada");
  }
});

server.listen(4455, () => { 
  console.log("Servidor en ejecución en http://localhost:4455/");
});
