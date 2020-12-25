const http = require('http')
const PORT = 3000
const DEFAULT_HEADER = {'Content-Type': 'application/json'}

const HeroFactory = require('./factories/heroFactory')
const heroService = HeroFactory.generateInstance()
const Hero = require('./entities/heroes')

const routes = {
  '/heroes:get': async (request, response) => {
    const { id } = request.queryString
    const heroes = await heroService.find(id)
    response.write(JSON.stringify({ results: heroes }))

    return response.end()
  },
  '/heroes:post': async (request, response) => {
    // async iterator
    for await ( const data of request ){
      const item = JSON.parse(data)
      const hero = new Hero(item)
      const { error, valid } = hero.isValid()

      if(!valid) {
        response.writeHead(400, DEFAULT_HEADER)
        response.write(JSON.stringify({ error: error.join(', ') }))
        return response.end()
      }

      const id = await heroService.create(hero)
      response.writeHead(201, DEFAULT_HEADER)
      response.write(JSON.stringify({ success: 'Hero created with success', id }))

      return response.end()
    }
  },
  default: (request, response) => {
    response.write('Hello World')
    response.end()
  }
}

const handler = (request, response) => {
  const { url, method } = request;
  const [first, route, id] = url.split('/')
  request.queryString = { id: isNaN(id) ? id : Number(id)}

  const key = `/${route}:${method.toLowerCase()}`

  response.writeHead(200, DEFAULT_HEADER)

  const chosen = routes[key] || routes.default

  return chosen(request, response)
}

http.createServer(handler)
  .listen(PORT, () => console.log('Server is running at', PORT))