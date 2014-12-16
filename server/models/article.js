var mongoose    = require('mongoose');
var ArticleSchema  = new mongoose.Schema({
  title: { type: String },
  slug: { type: String },
  excerpt: { type: String },
  content: { type: String },
  status: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

module.exports = mongoose.model('Article', ArticleSchema);
