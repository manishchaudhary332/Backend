import Transaction from "../models/transaction.model.js";

// Add transaction to a khata
export const addTransaction = async (req, res) => {
  const { khataId, person, amount, type, note } = req.body;

  const transaction = await Transaction.create({
    khataId,
    person,
    amount,
    type,
    note
  });

  res.status(201).json(transaction);
};

// Get all transactions for a khata
export const getTransactionsByKhata = async (req, res) => {
  const { khataId } = req.params;

  const transactions = await Transaction.find({ khataId }).sort({ date: -1 });
  res.json(transactions);
};

// Update transaction
export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const updated = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ msg: "Deleted" });
};

