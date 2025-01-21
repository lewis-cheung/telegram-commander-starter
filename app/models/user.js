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
  lastCommandAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

/**
 * Create a new user
 * @param {Number} chatId
 * @param {UserStatus} status
 * @returns {Promise<User>}
 */
function createUser(chatId, status) {
  const user = new User({ chatId, status })
  return user.save()
}

/**
 * Get a user by chatId
 * @param {Number} chatId
 * @returns {Promise<User>}
 */
function getUserByChatId(chatId) {
  return User.findOne({ chatId })
}

/**
 * Get a user by id
 * @param {string} id
 * @returns {Promise<User>}
 */
function getUserById(id) {
  return User.findById(id)
}

export {
  User,
  UserStatus,
  userSchema,
  createUser,
  getUserByChatId,
  getUserById,
}
