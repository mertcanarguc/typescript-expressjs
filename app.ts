//DEPENDENCİES
import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
//APP
const app = express();
//ROUTES
import indexRouter from './src/router/index';
app.use('/', indexRouter)
//CREATE SERVER
const port = process.env.PORT
app.listen(port, () => {
	console.log(`Application is listen ${port}`)
})

