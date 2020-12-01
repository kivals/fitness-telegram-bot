const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  telegram_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  group_id: {
    type: [String],
    required: true,
  },
  second_name: {
    type: String,
  },
})

mongoose.model('users', UserSchema);