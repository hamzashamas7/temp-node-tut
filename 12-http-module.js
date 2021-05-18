const http  = require('http');
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.end('This is my homepage')

    }
    if(request.url==='/about'){
        response.end('This is our about us')
    }
    response.end("<h1>Opps</h1><br><a >")

})

server.listen(5000);