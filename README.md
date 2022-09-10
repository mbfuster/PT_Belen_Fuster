# PT_Belen_Fuster
Repositorio para pruebas técnicas, para postulación a xepelin

## Logic_test
Aquí se encuentra los scripts para ambos ejercicios de lógica, en base a javascript. 
Para correrlos basta con ejecutar el comando:

```sh
node *nombre_archivo*
```

## MVP
Aqui se encuentra la aplicación en react para la interfaz del MVP. Se creó en react con servicio de autenticación en firebase y lógica de App Scripts en un proyecto de GCS.

### Requisitos
- node : 16.13.2
- npm: 8.19.1
- react: ^18.2.0

`npm i` Para instalar el resto de los paquetes

### `npm start`

Para correrlo en modo desarrollo:
Open [http://localhost:3000](http://localhost:3000) Para verlo en el navegador.


### Nota:
- No quedó completo el deploy de la aplicación por lo que no se adjunta. 
- Se logró el login pero no una versión de vistas protegidas estable, por lo que no se incluye
- La lógica para enviar el mail se desarrollo en Apps Scripts como un complento a una hoja nueva (https://docs.google.com/spreadsheets/d/1BBeeKJUvvjIjy8B0AD-w7UNq1kh7RHa0QywoqGOZAtQ/edit?usp=sharing)

El codigo corresponde a :

```sh
function sendNotification(e){
  Logger.log(JSON.stringify(e.range))
  var range = e.range
  var column = range.columnEnd;
  if (column == 2){
    var idOp = SpreadsheetApp.getActiveSheet().getRange(range.rowEnd, range.columnEnd-1).getValue();
    var tasa = e.value
    var email = SpreadsheetApp.getActiveSheet().getRange(range.rowEnd, range.columnEnd+1).getValue();


    var body = {
      "idOp": idOp,
      "tasa": tasa,
      "email": email,
    }

    Logger.log(Object.values(body))
    var options = {
      "method" : "POST",
      "contentType" : "application/json",
      "payload" : body
    };
    var response = UrlFetchApp.fetch('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g', options);
    Logger.log(response.getContentText());    
  }
  e.range.setNote('Last modified: ' + new Date());    

}
```
y se ejecuta gracias a un gatillo de edición en el archivo. Para poder acceder a este codigo, se tiene que invitar por mail, por lo que pido me escriban a belenfustera@gmail.com para agregarlos al proyecto en GCS.





