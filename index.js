const express=require('express')
const cors=require('cors')
const setupDB=require('./config/database')
const router=require('./config/routes')
const {usersRouter}=require('./app/controller/UsersController')
const app=express()
const port=3040

app.use(express.json())
app.use(cors())
app.use('/', router)

// app.use('/users',usersRouter)


//DB configuration
setupDB()


app.listen(port,()=>{
    console.log('listening to port',port)
})




