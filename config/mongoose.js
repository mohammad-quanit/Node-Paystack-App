const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://mquanit:danzakuduro12345@ds113853.mlab.com:13853/starter-db', {useNewUrlParser: true}
);

module.exports = { mongoose };
