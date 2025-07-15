import Khata from "../models/khata.model.js";

export const createKhata = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId;

  const khata = await Khata.create({ title, owner: userId });
  res.status(201).json(khata);
};

export const getAllKhatas = async (req, res) => {
  const khatas = await Khata.find({ owner: req.user.userId });
  res.json(khatas);
};

// Add update and delete functions later
export const deleteKhata = async (req, res) => {
  const { id } = req.params;
  const deleted = await Khata.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ msg: "Khata not found" });
  res.json({ msg: "Deleted successfully" });
};

export const updateKhata = async (req, res) => {
  const { id } = req.params;
  const updated = await Khata.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ msg: "Khata not found" });
  res.json(updated);
};
