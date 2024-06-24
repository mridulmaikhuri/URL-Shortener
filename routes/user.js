const express = require('express')
const {
    createNewUser,
    handleUserLogin
} = require('../controllers/user')

const router = express.Router()

router.post("/signup", createNewUser)
router.post("/login", handleUserLogin)

module.exports = router;