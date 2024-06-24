const url = require('../models/urlSchema')
const shortUniqueId = require('short-unique-id')

const {randomUUID} = new shortUniqueId({length: 10})

async function createShortUrl(req, res) {
    const originalUrl = req.body.url
    if (!originalUrl) return res.status(400).json({ msg: "Bad Request" })

    const shortId = randomUUID()
    await url.create({
        shortUrl: shortId,
        originalUrl: originalUrl,
        history: [],
        createdBy: req.user._id
    })

    return res.render("home", {
        id: shortId,
        user: req.user
    })
}

async function redirectToOriginalUrl(req, res) {
    const shortId = req.params.shortId
    const entry = await url.findOneAndUpdate(
        {
            shortUrl: shortId
        },
        {
            $push : {
                history: Date.now()
            }
        }
    )
    return res.redirect(entry.originalUrl)
}

async function getHistory(req, res) {
    const shortId = req.params.shortId
    const entry = await url.findOne(
        {
            shortUrl: shortId
        }
    )

    return res.json({
        totalClicks: entry.history.length,
        history: entry.history
    })
}

module.exports = {
    createShortUrl,
    redirectToOriginalUrl,
    getHistory
}
