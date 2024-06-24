const express = require('express')
const { 
    createShortUrl, 
    redirectToOriginalUrl,
    getHistory
} = require('../controllers/url')

const router = express.Router()

router.post("/", createShortUrl)
router.get("/", (req, res) => {
    return res.redirect("/")
})
router.get("/:shortId", redirectToOriginalUrl)
router.get("/api/:shortId", getHistory)

module.exports = router;