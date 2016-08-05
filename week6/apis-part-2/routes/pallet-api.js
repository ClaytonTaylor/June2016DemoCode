var request = require('request'),
    baseUrl = 'http://pokeapi.co/api/v2';

module.exports = {
    grabAPokemon: (req, res) => {
        var endpoint = `${baseUrl}/pokemon-species/${req.query.pokemon}`;

        // console.info('\n','Endpoint:', endpoint, '\n');

        request(endpoint, (error, response, body) => {
            if( error ) {
                res.status(500).send({
                    message: 'Things are not okay :('
                })
            } else {
                res.send(body);
                // module.exports.evolution(req, res);
            }
        });
    }
};
