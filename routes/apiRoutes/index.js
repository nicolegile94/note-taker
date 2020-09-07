const router = require('express').Router();
const animalRoutes = require('../apiRoutes/apiRoutes');

router.use(apiRoutes);

module.exports = router;