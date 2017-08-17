const router = require('express').Router();
const controller = require('../controllers/itemCtrl');

router.post('/add', controller.addItem);
router.post('/dummyRoute', controller.dummyRoute);
router.get('*', controller.getItems);

module.exports = router;