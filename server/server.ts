import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import HomeController from './controllers/home.controller'
import BookController from './controllers/book.controller'
import JournalController from './controllers/journal.controller'



const app = new App({
    port: 3000,
    controllers: [
        new HomeController(),
        new BookController(),
        new JournalController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()