const mongoose=require('mongoose')


const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String,
        required:true
        // custom validation
        // validate:{
        //     validator:function(value){
        //         condition ? true :false
        //     },
        //     message:function(){
        //         return 'something went wrong'
        //     }
        // }
    },
    body:{
        type:String
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'//hea category is model name
    }
})

//mongoose middleware
//pre ('validate')
// noteSchema.pre('save',function(next){
//     console.log('function called before saving a record')
//     next()
// })

//model
const Note=mongoose.model('Note',noteSchema)

module.exports=Note