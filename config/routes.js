
module.exports = function(router) {
  'use strict';

  var routes = {
    articles: require('../server/routes/articles')
  };

  router.route('/articles')
    .get(routes.articles.index)
    .post(routes.articles.create);

  router.route('/articles/:_id')
    .get(routes.articles.show)
    .put(routes.articles.update)
    .delete(routes.articles.delete);
};
