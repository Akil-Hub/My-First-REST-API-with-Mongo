
const express = require('express')
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser, deleteAllUser } = require('../controllers/user.controller')
const router = express.Router()





router.get('/', getAllUsers)
router.get('/', deleteAllUser)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.post('/', createUser)
router.delete('/delete/all',deleteAllUser)
 
module.exports = router