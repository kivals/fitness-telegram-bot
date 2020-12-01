const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientResultSchema = new Schema({
  client_id: {
    type: String,
    required: true,
  },
  workout_id: {
    type: String,
    required: true,
  },
  results: {
    type: String,
    required: true,
  },
});

mongoose.model('groups', ClientResultSchema);