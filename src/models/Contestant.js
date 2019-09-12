const { Schema, model } = require('mongoose')

const contestantSchema = new Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  dateofbirth: {
    type: Date,
    required: true,
    max: ['2001-09-12','You are not allowed to register because of your age']
  },
  mobilephone: {
    type: String
  },
  countryofres: {
    type: String,
    required: true,
    enum: {values: ['Spain', 'spain'], message: 'You must live in Spain'}
  },
  email: {
    type: String
  },
  swcharacter: {
    type: String
  }
});

module.exports = model('Contestant', contestantSchema)