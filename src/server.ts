import express, { json } from 'express'

const app = express()

const port = 3333

app.use(json())
app.listen(port, () => console.log(`🚀 App is running at port ${port}!`))