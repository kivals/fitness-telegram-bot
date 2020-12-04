require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.error(`error1: ${err}`);
  }
})();
module.exports = mongoose.connection;
