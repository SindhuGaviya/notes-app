const express=require('express')
const router=express.Router()
const notesController=require('../app/controller/notesController')
const categoriesController=require('../app/controller/categoriesController')
const usersController=require('../app/controller/UsersController')
const {authenticateUser}=require('../app/middlewares/authentication')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)

router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',notesController.create)
router.put('/notes/:id',notesController.update)
router.delete('/notes/:id',notesController.destroy)

router.get('/categories',categoriesController.list)
router.post('/categories',categoriesController.create)
router.get('/categories/:id',categoriesController.show)
router.put('/categories/:id',categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)



module.exports=router