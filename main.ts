import express from 'express'
import morgan from 'morgan'

import subhamRoute from './src/routes/subham.route'
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use(express.json())
app.use(morgan('dev'))

app.use('/subham', subhamRoute)

export default app
