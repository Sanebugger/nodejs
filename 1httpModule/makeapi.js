const htt =require ('http');
htt.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application\json'});
    resp.write(JSON.stringify({name:'saurav',emial:'jkahsdi.com'}))
    resp.end();

}).listen(5000);
