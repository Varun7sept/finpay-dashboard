import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch transactions from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error("Error fetching transactions:", err));
  }, []);

  // Apply filter
  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "7days") {
      const last7 = new Date();
      last7.setDate(last7.getDate() - 7);
      return new Date(tx.date) >= last7;
    } else if (filter === "30days") {
      const last30 = new Date();
      last30.setDate(last30.getDate() - 30);
      return new Date(tx.date) >= last30;
    }
    return true; // all
  });

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 my-4">
      {/* Header with Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl text-gray-800">
          Recent Transactions
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="all">All</option>
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
        </select>
      </div>

      {/* Transaction List */}
      <ul>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((tx) => (
            <li
              key={tx.id}
              className="flex flex-col sm:flex-row sm:justify-between border-b py-2 last:border-none"
            >
              <span className="text-sm sm:text-base">
                {tx.date} - {tx.merchant}
              </span>
              <span
                className={`text-sm sm:text-base ${
                  tx.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.amount > 0 ? "+" : ""}₹{tx.amount}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No transactions found.</p>
        )}
      </ul>
    </div>
  );
}
