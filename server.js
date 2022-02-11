const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const path = require('path')

dotenv.config()
app.use(express.json())

// connecting to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log('mongodb connected'))
.catch((error) => console.log(error))

app.use('/api', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))


if(process.env.NODE_ENV === 'Production'){
    app.use('/', express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server is running on ${process.env.NODE_ENV} mode port 5000`);
})