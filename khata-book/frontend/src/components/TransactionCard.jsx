import { useState } from "react";

const TransactionCard = ({ t, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    person: t.person,
    amount: t.amount,
    type: t.type,
    note: t.note || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(t._id, form);
    setEditMode(false);
  };

  if (editMode) {
    return (
      <form onSubmit={handleSubmit} className="border p-3 rounded space-y-2 bg-gray-100">
        <input name="person" value={form.person} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="amount" type="number" value={form.amount} onChange={handleChange} className="border p-2 w-full rounded" />
        <select name="type" value={form.type} onChange={handleChange} className="border p-2 w-full rounded">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input name="note" value={form.note} onChange={handleChange} className="border p-2 w-full rounded" />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
          <button type="button" onClick={() => setEditMode(false)} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className="border p-3 rounded flex justify-between">
      <div>
        <p className="font-semibold">{t.person}</p>
        <p className="text-sm text-gray-600">{new Date(t.date).toLocaleDateString()}</p>
        <p className={`font-bold ${t.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
          ₹ {t.amount} ({t.type})
        </p>
        {t.note && <p className="text-sm text-gray-500">Note: {t.note}</p>}
      </div>
      <div className="space-y-1">
        <button onClick={() => setEditMode(true)} className="text-sm bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(t._id)} className="text-sm bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TransactionCard;
