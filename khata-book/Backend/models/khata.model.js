import mongoose from 'mongoose';

const khataSchema = new mongoose.Schema({
  title: String,
  owner: { type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
     },
  createdAt: { type: Date,
     default: Date.now
     },
});

export default mongoose.model("Khata", khataSchema);
