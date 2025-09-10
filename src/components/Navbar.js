export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-lg">FinPay Dashboard</h1>
      <button className="bg-white text-blue-600 px-3 py-1 rounded-md text-sm md:hidden">
        Menu
      </button>
    </nav>
  );
}
