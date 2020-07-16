const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log('loading express app (Model-Pet) (Schema-PetSchema)')

const PetSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Pet name is a required field"],
    minlength: [3, "Pet name length must be longer than 2 characters"],
    maxlength: [169, "Pet name length must be shorter than 170 characters"],
    unique: [true, "Pet name is already in the shelter database."]
  },
  type: {
    type: String,
    trim: true,
    required: [true, "Pet type is a required field"],
    minlength: [3, "Pet type length must be longer than 2 characters"],
    maxlength: [169, "Pet type length must be shorter than 170 characters"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Pet description is a required field"],
    minlength: [3, "Pet description length must be longer than 2 characters"],
    maxlength: [255, "Pet description length must be shorter than 256 characters"],
  },
  skill1: {
    type: String,
    trim: true,
    default: "",
  },
  skill2: {
    type: String,
    trim: true,
    default: "",

  },
  skill3: {
    type: String,
    trim: true,
    default: "",

  },
  likes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

function arrayLength(value){
  return value.length <=3;
}
module.exports = mongoose.model('Pet', PetSchema);
