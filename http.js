const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.end('Welcome to the home page');
   }
if(req.url==='/about')
     res.end('This is about page');
else
res.end('<h1>Oops!</h1> <p>We couldnt find the page youre looking for</p>');

   
});

server.listen(5000);