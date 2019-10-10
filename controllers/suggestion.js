var suggestionService = require('../services/suggestion.js')

/**
 * Returns a single suggestion from the suggestion box.
 */
exports.getSingle = function(req, res) { 
    if (req.params.id !== undefined) {
        console.log('getting suggestion number ' + req.params.id);
        suggestionService.getSingle(req.params.id)
            .then(r => {
                if (r === null) {
                    res.status(404).send(null);
                } else {
                    res.send(r);
                }
            });
    } else {
        res.status(400).send('Missing parameter');
    }
}

exports.list = function(req, res) {
    suggestionService.list()
        .then(r => {
            res.send(r);
        });
}

exports.deleteSingle = function(req, res) { 
    console.log('deleting suggestion number ' + req.params.id);
    res.send({'method': 'DELETE'});
}

exports.createSuggestion = function(req, res) {
    console.log('creating suggestion');
    suggestionService.create(req.body)
        .then(r => {
            res.status(201).send(null);
        });
}
