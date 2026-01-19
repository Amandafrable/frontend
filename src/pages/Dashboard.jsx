import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import AccountCard from "../components/dashboard/AccountCard";
import BalanceChart from "../components/dashboard/BalanceChart";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import { isLoggedIn } from "../../auth";
import axios from "axios";

export default function Dashboard() {
  // States for accounts and transactions
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); 

  // 🔒 Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
    } else {
      loadAccounts();
    }
  }, []);

  // Function to fetch accounts from backend
  const loadAccounts = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Fetch accounts
      const accountsRes = await axios.get("https://testing-cn8i.onrender.com/api/accounts", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      setAccounts(accountsRes.data);
      setLoading(false);

      // Load transactions for the first account (or any selected account)
      if (accountsRes.data.length > 0) {
        loadTransactions(accountsRes.data[0]._id); 
      }
    } catch (err) {
      console.error("Error loading accounts:", err);
      setLoading(false);
    }
  };

  // Function to fetch transactions for a specific account
  const loadTransactions = async (accountId) => {
    try {
      const token = localStorage.getItem("authToken");

      // Fetch transactions for the specific account
      const transactionsRes = await axios.get(
        `https://testing-cn8i.onrender.com/api/accounts/${accountId}/transactions`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      setTransactions(transactionsRes.data);
    } catch (err) {
      console.error("Error loading transactions:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Welcome back, Deborah
                </h1>
                <p className="text-sm text-gray-600">
                  Here's what's happening with your accounts
                </p>
              </div>
            </div>

            {/* Account Cards + Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {accounts.map((acc) => (
                  <AccountCard key={acc._id} account={acc} />
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-lg font-medium mb-4">Account balance (30 days)</h3>
                <BalanceChart />
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Recent Transactions</h3>
                <button className="text-sm text-blue-600 hover:underline">
                  View all
                </button>
              </div>

              {transactions.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent transactions</p>
              ) : (
                <TransactionsTable transactions={transactions} />
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
