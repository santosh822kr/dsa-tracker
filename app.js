const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const session = require('express-session')
const exphbs = require('express-handlebars')
const passport = require('passport')
const connectDB = require('./config/database')

const Savedproblems = require('./models/Savedproblems')

dotenv.config({ path: './config/config.env' })

require('./config/passport')(passport)

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    })
)

app.use(passport.initialize())
app.use(passport.session())

const {
    formatDate,
    editIcon,
  } = require('./helpers/hbs')


app.engine('.hbs',exphbs({ helpers: {
    formatDate,
    editIcon,
    }, defaultLayout: 'main', extname: '.hbs',}))
app.set('view engine', '.hbs');

//global variable middleware
// app.use( async (req, res, next) => {
//     const problems = await Savedproblems.find({ user: req.user.id }).lean()
//     res.locals.problems = problems || null
//     next()
// })  

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(PORT)
