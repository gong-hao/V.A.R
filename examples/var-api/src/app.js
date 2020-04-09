const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const skillService = require('./services/skill.service')

function init() {
  const app = express()
  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' })
  })

  app.get('/skill', (req, res) => {
    const list = skillService.list()
    res.status(200).send({ data: list })
  })

  app.get('/skill/:id', (req, res) => {
    const item = skillService.detail(req.params.id)
    res.status(200).send({ data: item })
  })

  app.post('/skill', (req, res) => {
    skillService.create(req.body)
    res.status(200).send({ message: 'ok' })
  })

  app.put('/skill/:id', (req, res) => {
    skillService.modify(req.params.id, req.body)
    res.status(200).send({ message: 'ok' })
  })

  app.delete('/skill/:id', (req, res) => {
    skillService.remove(req.params.id)
    res.status(200).send({ message: 'ok' })
  })

  app.all('*', (req, res) =>
    res.status(404).send({ statusCode: 404, message: 'api not found' })
  )
  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
      res.status(400).send({ error: err.toString() })
    } else {
      res.status(500).send({ error: err.toString() })
    }
  })
  return app
}

module.exports = init
