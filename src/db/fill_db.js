const mongoose = require('mongoose');
const config = require('./config');

require('../models/group.model');
require('../models/user.model');
require('../models/workout.model');
require('../models/client_result.model');

const Group = mongoose.model('groups');
const User = mongoose.model('users');
const Workout = mongoose.model('workout');
const ClientResult = mongoose.model('client_results');



mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Mongo connected')
}).catch(err => console.log(err) )