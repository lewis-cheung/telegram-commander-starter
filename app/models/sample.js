import mongoose from 'mongoose'

const sampleSchema = new mongoose.Schema({
  data: { type: String, required: true },
}, {
  timestamps: true,
})

const Sample = mongoose.model('Sample', sampleSchema)

export {
  Sample,
  sampleSchema,
}