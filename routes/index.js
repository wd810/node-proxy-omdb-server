const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')

// Import key
const API_BASE_URL = process.API_BASE_URL
const API_KEY_NAME = process.API_KEY_NAME
const API_KEY_VALUE = process.API_KEY_VALUE

router.get('/', async (req, res) => {
    res.json({ success: true })
})

module.exports = router