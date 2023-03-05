const express = require('express')
const app = express()
const port = 3000
const cors= require('cors')
const dbConnect =require('./dbConnect')
dbConnect()
const run =require('./Persons')
run()



app.use(cors())
app.use(express.json())
app.use('/api', require('./routes'))
app.listen(port)