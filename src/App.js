import Navbar from "./components/Navbar";
import CardOverview from "./components/CardOverview";
import TransactionList from "./components/TransactionList";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to FinPay
        </h1>

        {/* Card Overview */}
        <CardOverview />

        {/* Transaction List */}
        <TransactionList />
      </div>
    </div>
  );
}
