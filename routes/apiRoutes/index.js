const router = require('express').Router();
const apiRoutes = require('../apiRoutes/apiRoutes');
const { notes } = require('../../data/db');

router.use(apiRoutes);

module.exports = router;