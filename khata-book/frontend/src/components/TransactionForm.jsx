import { useState } from "react";
import { createTransaction } from "../api/transaction.api";

const TransactionForm = ({ khataId, onAdd }) => {
  const [form, setForm] = useState({
    person: "",
    amount: "",
    type: "credit",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { ...form, khataId };
    await createTransaction(newTransaction);
    onAdd();
    setForm({ person: "", amount: "", type: "credit", note: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input name="person" value={form.person} onChange={handleChange} placeholder="Person" className="border p-2 w-full rounded" />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="border p-2 w-full rounded" />
      <select name="type" value={form.type} onChange={handleChange} className="border p-2 w-full rounded">
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      <input name="note" value={form.note} onChange={handleChange} placeholder="Note (optional)" className="border p-2 w-full rounded" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
