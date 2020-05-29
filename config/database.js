const mongoose=require('mongoose')

const setupDB=()=>{
    //db configuration
mongoose.connect('mongodb://localhost:27017/nov-notes-app')
.then(()=>{
    console.log('success')
})
.catch(()=>{
    console.log('err')
})
}

module.exports=setupDB