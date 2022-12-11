const { error } = require('console');
const http = require('http')
//console.log(http);

const server = http.createServer((req,res)=>{
    //console.log(req,url)
    if(req.url == '/'){
    res.write('<h1>chekpoint nodejs</h1>')
    res.end()
}
if(req.url == '/Profile'){
    res.write('<h2>Page De Profile</h2>')
    res.end()}
});

const Port = 5000;

server.listen(5000 , err => err? console.log(err)
 : console.log(`réussite ${Port}...`))