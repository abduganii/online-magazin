const express = require('express')
const app = express()
const router = require('./modules')
const mongo = require('./lib/mongo')
const PORT = process.env.PORT || 5000

; (async () => {
    try {

        await mongo()

        app.use(express.json())
        app.use(router)
        app.use('/*', (_, req) => {
            req.sendStatus(404)
        })

    } finally {
        app.listen(PORT,console.log(PORT))
    }
})()