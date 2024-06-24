const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const { isUserLoggedIn } = require('./middlewares/auth')
const { connectToMongoDb } = require('./connection')

const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/user')

const app = express()
const PORT = 8000

connectToMongoDb("mongodb://localhost:27017/short-url-db")
.then(() => console.log("connected to mongodb"))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use("/url", isUserLoggedIn, urlRouter)
app.use("/", staticRouter)
app.use("/user", userRouter)

app.listen(PORT, () => console.log("Server Started"))