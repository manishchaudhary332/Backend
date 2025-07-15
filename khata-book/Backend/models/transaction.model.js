import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  khataId: { type: mongoose.Schema.Types.ObjectId, 
  ref: 'Khata',
   required: true 
  },
  person: { type: String,
  required: true },
  amount: { type: Number,
  required: true },
  type: { type: String,
  enum: ['credit', 'debit'],
  required: true },
  date: { type: Date,
  default: Date.now },
  note: String,
});

export default mongoose.model("Transaction", transactionSchema);
