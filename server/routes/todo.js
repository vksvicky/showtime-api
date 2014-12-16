module.exports = function(Todo) {
  'use strict';

  var todoRoutes = {
    index: function(req, res) {

      // use mongoose to get all todos in the database
      Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(todos); // return all todos in JSON format
      });
    },

    // create todo and send back all todos after creation
    create: function(req, res) {

      // create a todo, information comes from AJAX request from Angular
      Todo.create({
        text : req.body.text,
        done : false
      }, function(err, todo) {
        if (err) {
          res.send(err);
        }

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
          if (err) {
            res.send(err);
          }
          res.json(todos);
        });
      });

    },

    // delete a todo
    delete: function(req, res) {
      Todo.remove({
        _id : req.params.todo_id
      }, function(err, todo) {
        if (err) {
          res.send(err);
        }

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
          if (err) {
            res.send(err);
          }
          res.json(todos);
        });
      });
    }
  };

  return todoRoutes;
};
