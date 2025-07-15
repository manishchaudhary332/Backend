import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTransactions, deleteTransaction } from "../api/transaction.api";
import TransactionCard from "../components/TransactionCard";
import TransactionForm from "../components/TransactionForm";
import Navbar from "../components/Navbar";
import { updateTransaction } from "../api/transaction.api";

const KhataDetails = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res = await getTransactions(id);
    setTransactions(res.data);
  };

 const handleDelete = async (id) => {
  await deleteTransaction(id);
  fetchData(); // ✅ refresh list after delete
};

const handleEdit = async (id, data) => {
  await updateTransaction(id, data);
  fetchData(); // ✅ refresh list after edit
};


  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-6 p-4">
        <h2 className="text-xl font-bold mb-4">Khata Transactions</h2>
        <TransactionForm khataId={id} onAdd={fetchData} />
        <div className="space-y-3">
          {transactions.map((t) => (
            <TransactionCard
              key={t._id}
              t={t}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KhataDetails;
