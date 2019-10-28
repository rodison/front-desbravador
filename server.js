'use strict'

import 'babel-polyfill'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
// import {
//     createUser, whoHaveYouSeen, updateContact,
//     addNewEmptyContact, login, addNewEmptyContactData, deleteContact
// } from './app/routeProcessor/routeProcessor'
import { rLog } from './src/app/utils/Util'

// require('./app/persistence/mongooseConnection')

// // const ACTION_DELETE = 'delete'

const app = express()
app.use(bodyParser())

const port = process.env.PORT || 80
// const port = process.env.PORT || 3000

// rotas da API
const router = express.Router()

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
                })
            })
        res.status(200).send('OK')
    })

// router.route('/whohaveyouseen')
//     .post((req, res) => {
//         rLog('Its in get /whohaveyouseen')
//         whoHaveYouSeen(req, res)
//     })

// router.route('/addnewemptycontact')
//     .post((req, res) => {
//         rLog('Its in get /addnewemptycontact')
//         addNewEmptyContact(req, res)
//     })

// router.route('/updatecontact')
//     .post((req, res) => {
//         rLog('Its in get /updatecontact')
//         updateContact(req, res)
//     })

// router.route('/addnewemptycontactdata')
//     .post((req, res) => {
//         rLog('Its in get /addnewemptycontactdata')
//         addNewEmptyContactData(req, res)
//     })

// router.route('/deletecontact')
//     .post((req, res) => {
//         rLog('Its in get /deletecontact')
//         deleteContact(req, res)
//     })

// router.route('/login')
//     .post((req, res) => {
//         rLog('Caiu no get /login')
//         login(req, res)
//     })

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
