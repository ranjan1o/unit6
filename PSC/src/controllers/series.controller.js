const express = require('express');
const router = express.Router();

const Series = require('../models/series.model')
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
router.get("/premium", authenticate, authorize(["premium"]), async (req, res) => {
    const series = await Series.find({ availableFor: "premium" }).lean().exac();
    return res.status(201).json({ series })

})
router.get("/guest", authenticate, authorize(["guest"]), async (req, res) => {
    const series = await Series.find({ availableFor: "guest" }).lean().exac();
    return res.status(201).json({ series })

})

module.exports = router;