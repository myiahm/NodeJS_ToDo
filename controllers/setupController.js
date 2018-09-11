const Todos = require('../Models/todoModel.js');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        const starterTodos = [
            {
                username: 'partyhardy',
                toDo: 'party hard',
                isDone: false
            },
            {
                username: 'partyhardy',
                toDo: 'make it home',
                isDone: false
            },
            {
                username: 'partyhardy',
                toDo: 'be a rockstar',
                isDone: false
            }

        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        })
    })


};