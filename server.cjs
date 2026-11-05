const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=__dirname,port=Number(process.env.PORT)||3000;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document'};
http.createServer((request,response)=>{let pathname;try{pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname)}catch{response.writeHead(400);return response.end('Bad request')}
const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+path.sep)){response.writeHead(403);return response.end('Forbidden')}
fs.readFile(file,(error,content)=>{if(error){response.writeHead(404);return response.end('Not found')}response.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');response.end(content)})
}).listen(port,'127.0.0.1',()=>console.log('Portfolio: http://localhost:'+port));
