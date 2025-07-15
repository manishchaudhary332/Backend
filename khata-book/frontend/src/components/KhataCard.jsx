import { useState } from "react";
import { useNavigate } from "react-router-dom";

const KhataCard = ({ khata, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(khata.title);
  const navigate = useNavigate();

  const handleSave = () => {
    onEdit(khata._id, { title }); // Call parent update
    setEditMode(false);
  };

  return (
    <div className="bg-white shadow p-4 rounded border flex justify-between items-center">
      <div>
        {editMode ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
          />
        ) : (
          <>
            <h3 className="text-lg font-bold">{khata.title}</h3>
            <p className="text-gray-500 text-sm">
              Created: {new Date(khata.createdAt).toLocaleDateString()}
            </p>
          </>
        )}
      </div>

      <div className="space-x-2">
        <button
          className="text-sm bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => navigate(`/khata/${khata._id}`)}
        >
          View
        </button>

        {editMode ? (
          <button
            className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="text-sm bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}

        <button
          className="text-sm bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(khata._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default KhataCard;
