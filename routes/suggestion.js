var express = require('express');
var router = express.Router();

var suggestion_controller = require('../controllers/suggestion.js')

router.get('/', suggestion_controller.list)
router.get('/:id', suggestion_controller.getSingle)
router.delete('/:id', suggestion_controller.deleteSingle)
router.post('/', suggestion_controller.createSuggestion)

module.exports = router
