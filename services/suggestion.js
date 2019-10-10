var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'suggestion_box' });

var Mapper = cassandra.mapping.Mapper;

var allQuery = 'SELECT * FROM suggestions'
var maxId = 'SELECT max(id) as max FROM suggestions'

var UnderscoreCqlToCamelCaseMappings = cassandra.mapping.UnderscoreCqlToCamelCaseMappings;

var mappingOptions = {
  models: {
    'Suggestions': {
      tables: ['suggestions'],
      mappings: new UnderscoreCqlToCamelCaseMappings()
    }
  }
};

var mapper = new Mapper(client, mappingOptions);
var suggestionMapper = mapper.forModel('Suggestions');

async function getSuggestion(id) {
    return await suggestionMapper.get({ id: id });
}

async function list() {
    return client.execute(allQuery, [])
        .then(r => r.rows);
}

async function create(input) {
    var timestamp = (new Date()).toLocaleString('sv-SE');
    return client.execute(maxId, [])
        .then(row => row.rows[0].max + 1)
        .then(id => {
            suggestionMapper.insert({ 
                id: id,
                author: input.author,
                createdAt: timestamp,
                description: input.description,
                title: input.title
            });
        });
}

module.exports.getSingle = getSuggestion;
module.exports.list = list;
module.exports.create = create;
