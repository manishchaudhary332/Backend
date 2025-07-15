import { useEffect, useState } from "react";
import { getAllKhatabooks, createKhata, deleteKhata } from "../api/khata.api";
import Navbar from "../components/Navbar";
import KhataCard from "../components/KhataCard";
import { updateKhata } from '../api/khata.api';


const Profile = () => {
  const [khatabooks, setKhatabooks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchKhatabooks = async () => {
    const res = await getAllKhatabooks();
    setKhatabooks(res.data);
  };

  useEffect(() => {
    fetchKhatabooks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title) return;
    await createKhata({ title });
    setTitle("");
    fetchKhatabooks();
  };

  const handleDelete = async (id) => {
  try {
    await deleteKhata(id);
    fetchKhatabooks(); // Refresh cards
  } catch (err) {
    console.error("Delete failed", err.message);
  }
};

const handleEdit = async (id, newData) => {
  try {
    await updateKhata(id, newData);
    fetchKhatabooks(); // refresh list
  } catch (err) {
    console.error("Edit failed", err.message);
  }
};


  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-6 p-4">
        <form onSubmit={handleCreate} className="flex gap-2 mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New Khata Title"
            className="flex-1 border p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Create
          </button>
        </form>

        <div className="grid gap-4">
          {khatabooks.map((khata) => (
            <KhataCard
  key={khata._id}
  khata={khata}
  onDelete={handleDelete}
  onEdit={handleEdit}
/>

          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
