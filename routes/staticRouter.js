const express = require('express')
const { isUserLoggedIn } = require('../middlewares/auth')
const url = require("../models/urlSchema")

const router = express.Router()

router.get("/", isUserLoggedIn, (req, res) => {
    return res.render("home", {
        user: req.user
    })
})

router.get("/signup", (req, res) => {
    return res.render("signup")
})

router.get("/login", (req, res) => {
    return res.render("login")
})

router.get("/getAnalytics", isUserLoggedIn, async (req, res) => {
    const allUrls = await url.find({createdBy: req.user._id});
    return res.render("analytics", {
        user: req.user,
        urls: allUrls
    });
})

module.exports = router