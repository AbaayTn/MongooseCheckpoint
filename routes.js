const router=require('express').Router()
const userController=require('./userController')


router.get('/get',userController.getPerson)
router.get('/getOne',userController.getOnePerson)
router.get('/getID',userController.getIDPerson)
router.post('/add',userController.addPerson)
router.post('/update',userController.updatePerson)
router.post('/updateOne',userController.findAndUpdate)
router.post('/findAndRemove',userController.findAndRemove)
router.delete('/deleteMany',userController.deleteMany)
router.get('/getburritos',userController.getburritos)


module.exports=router