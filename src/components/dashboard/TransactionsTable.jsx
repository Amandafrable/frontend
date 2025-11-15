export default function TransactionsTable({ transactions }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-xs uppercase text-gray-500">
            <th className="pb-3">Date</th>
            <th className="pb-3">Description</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Balance</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="py-3 text-sm text-gray-600">{t.date}</td>
              <td className="py-3 text-sm">{t.description}</td>

              <td
                className={`py-3 text-sm ${
                  t.amount < 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toLocaleString()}
              </td>

              <td className="py-3 text-sm text-gray-600">
                ${t.balance.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
