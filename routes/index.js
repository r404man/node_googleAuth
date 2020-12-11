const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desk Login/Landing page
// @rout GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login');
});


// @desk Dashboard 
// @rout GET /
router.get('/index', ensureAuth, async (req, res) => {
    res.render('index');
});



module.exports = router;