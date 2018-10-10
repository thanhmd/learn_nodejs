const http = require('http')

const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer(function(request, reponse){
    console.log(request)
    reponse.statusCode = 200
    reponse.setHeader('Content-Type', 'text/html')
    reponse.write('<h1>Hello I am Minh Thanh</h1>');
    reponse.write('Hello World\nHello new line');
    reponse.end('Good bye');
})

server.listen(port, hostname, function(){
    console.log(`Server is running at http://${hostname}:${port}/`)
})