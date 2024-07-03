const express=require("express")
const app=express()

const cors = require('cors')
app.use(cors())
app.use("/",(req,res)=>{
    res.set('Content-Type', 'text/plain').send('This is the Test API for strategy development')
})
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})