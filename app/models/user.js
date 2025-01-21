import mongoose from 'mongoose'

/**
 * @enum {string}
 */
const UserStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

const userSchema = new mongoose.Schema({
  chatId: { type: Number, required: true },
  status: { type: String, required: true, enum: Object.values(UserStatus) },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export {
  User,
  UserStatus,
  userSchema,
}