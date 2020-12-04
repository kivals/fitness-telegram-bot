const db = require('./db/connection');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.info('База данных подключена...');
});
