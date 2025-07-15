const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Khata Book 🧾</h1>
      <a href="/login" className="hover:underline">Logout</a>
    </nav>
  );
};

export default Navbar;
