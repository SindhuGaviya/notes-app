const Note=require('../models/note')

module.exports.list=(req,res)=>{
    Note.find().populate('category',['_id','name'])
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    // Note.findById(id).populate('category')//category is field name//static method
    Note.findOne({_id:id}).populate('category',['_id','name'])
    .then((note)=>{
       if(note){
           res.json(note)
       }else{
           res.json({})
       }
    })
    .catch((err)=>{
        res.json(err)
    })
  }

module.exports.create=(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.save()//instance method
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
 }

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Note.findByIdAndDelete(id)
    .then((note)=>{
        if(note){
       res.json(note)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
  }


