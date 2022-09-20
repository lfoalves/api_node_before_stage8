const http = require('http');

const users = [
  {
    name: 'Luiz',
    age: '20',
    city: 'Boa Vista'
  },
  {
    name: 'Maria',
    age: '20',
    city: 'Manaus'
  },
  {
    name: 'João',
    age: '20',
    city: 'Maranhão'
  },
  {
    name: 'Cayo',
    age: '20',
    city: 'Boa Vista'
  }
]

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;
  const params = request.params;

  console.log("METHOD", method, "URL", url, "PARAMS", params)
  console.log('OK')

  // GET
  if (method === 'GET') {
    if(url === '/')
    response.setHeader('Content-type', 'application/json');
    console.dir(users)
    console.log(users)
    return response.end(JSON.stringify({users}))
  }

  // POST
  if(method === 'POST') {
    console.log('Mehthod Post')
    
    return request.on('data', (data) => {
      const body = JSON.parse(data);
      console.log(body)
      response.end(JSON.stringify(body))
    })
  }

  // PUT
  if(method === 'PUT') {
    console.log('Mehthod Put')
    return response.end('PUT')
  }

  // DELETE
  if(method === 'DELETE') {
    console.log('Mehthod Delete')
    return response.end('DELETE')
  }

  // PATCH
  if (method === 'PATCH') {
    console.log('PATCH')
    return console.log('PATCH')
  }

  response.statusCode = 200;
  response.end(JSON.stringify({
    "message": "Qualquer outra rota ou método",
    "method": "Outro método",
    "route": "Qualquer rota"
  }))
}) 

const PORT = 3000
server.listen(PORT, console.log('Server is running on Port', PORT))

process.on('uncaughtException', (err) => console.log('Error do processo do server', err))


