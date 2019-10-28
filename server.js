'use strict'

import 'babel-polyfill'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import { rLog } from './src/app/utils/Util'

const app = express()
app.use(bodyParser())

const port = process.env.PORT || 80
// const port = process.env.PORT || 3000

// rotas da API
const router = express.Router()

router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/public/index.html'))
})

router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/public/index.html'))
})

router.get('/index.css', (req, res) => {
    res.sendfile(path.join(__dirname, '/public/css/index.css'))
})

router.route('/users/:user')
    .get((req, res) => {
        rLog('caiu no /users/:user')
        rLog('params:', req.params)
        const user = req.params.user
        fetch(`https://api.github.com/users/${user}`)
            .then(response => {
                response.json().then(json => {
                    rLog('json resultante:', json)
                    res.status(200).send(json)
                })
            })
            .catch(() => {
                res.status(200).send('Usuário não encontrado')
            })
    })

// Add headers
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
})

// registrando as rotas
app.use('/front-desbravador', router)

// iniciando server
app.listen(port, () => {
    rLog(`Servidor rodando na porta: ${port}`)
})
