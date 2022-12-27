const http = require('http')

http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' })

    
    //res.write('hola mundo')

    res.write('id, nombre\n')
    res.write('1, Jonathan\n')
    res.write('2, Maria\n')
    res.write('3, Valentina\n')
    res.write('4, Juanita\n')
    res.write('5, David\n')

    res.end();

})
.listen(8080)


console.log('Escuchando en el puerto  ' + 8080);