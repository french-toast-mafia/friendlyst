const router = require('express').Router();
const controller = require('../controllers/eventsCtrl');

router.get('/getEvents', controller.getEvents);

module.exports = router;