const Schema = require('mongoose').Schema;

const soundSchema = new Schema({
  title: String,
  author: Schema.ObjectId
})

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  team_ids: [Schema.ObjectId],
  invite_ids: [Schema.ObjectId],
  sound_ids: [Schema.ObjectId]

})

const teamSchema = new Schema({
  name: String,
  slug: String
})

module.exports = {
  userSchema,
  soundSchema,
  teamSchema
}
