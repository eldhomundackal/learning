const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000;

// createServer has a call back function which has two parameter (req, request)
const server = http.createServer((req,res) =>{
  let filePath = path.join(__dirname, req.url=== '/' ? "index.html" : req.url);
  const extName = (String(path.extname(filePath).toLowerCase()));
    if (!path.extname(filePath)) {
    filePath += '.html';
  }
  const mimeType = {
    '.html' : 'text/html'
  }
  const contentType = mimeType[extName] || 'application/octet-stream'
  fs.readFile(filePath, (error, content) =>{
    if (error){
        res.writeHead(404,{'ContentType':contentType})
        res.end("content not found")
    }
    else {
      res.writeHead(200, {'ContentType': contentType})
       res.end(content,'utf-8')
    }
  } )

})

//listen has two parameter port number and a call back function
server.listen(port, ()=>{
  console.log(`Server is listning to ${port}`)
})
