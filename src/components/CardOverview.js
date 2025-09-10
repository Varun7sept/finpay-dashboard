import { useEffect, useState } from "react";

export default function CardOverview() {
  const [card, setCard] = useState(null);

  // Fetch card data from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/cards/1")
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((err) => console.error("Error fetching card:", err));
  }, []);

  if (!card) return <p className="text-gray-500">Loading card...</p>;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 my-4">
      <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
        Credit Card
      </h2>
      <p className="text-gray-700 text-base sm:text-lg">{card.number}</p>
      <p className="text-green-600 font-semibold mt-2 text-sm sm:text-base">
        Balance: ₹{card.balance}
      </p>
      <p className="text-red-500 mt-1 text-sm sm:text-base">
        Due: {card.dueDate}
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 mt-3 rounded-lg text-sm sm:text-base">
        Pay Now
      </button>
    </div>
  );
}
