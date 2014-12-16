var Article         = require('../models/article');
var articlesRoutes  = {

  index: function(req, res) {
    Article.find(function(err, articles) {
      if (err) {
        res.send(err);
      }

      res.json(articles);
    });
  },

  create: function(req, res) {
    Article.create(req.body, function(err, article) {
      if (err) {
        res.send(err);
      }

      res.json(article);
    });
  },

  show: function(req, res) {
    Article.findOne({
      _id : req.params._id
    }, function(err, article) {
      if (err) {
        res.send(err);
      }
      res.json(article);
    });
  },

  update: function(req, res) {
    req.body.updated_at = new Date();

    Article.findOneAndUpdate({
      _id : req.params._id
    }, req.body, function(err, article) {
      if (err) {
        res.send(err);
      }

      res.json(article);
    });
  },

  delete: function(req, res) {
    Article.remove({
      _id : req.params._id
    }, function(err, article) {
      if (err) {
        res.send(err);
      }

      Article.find(function(err, articles) {
        if (err) {
          res.send(err);
        }
        res.json(articles);
      });
    });
  }
}

module.exports = articlesRoutes;
