const mongoose = require('mongoose');
mongoose.connect(
  'url-string-heere', {useNewUrlParser: true}
);

module.exports = { mongoose };
