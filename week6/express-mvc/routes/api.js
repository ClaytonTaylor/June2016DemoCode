module.exports = {
    get: function(req, res){
        res.json({
            path: 'api-root'
        });
    },
    user: function(req, res) {
        res.json({
            path: 'user'
        })
    },
    users: function(req, res) {
        res.json({
            path: 'users'
        });
    }
}
