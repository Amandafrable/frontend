export default function Services() {
  const items = [
    { title: "Bank Accounts", desc: "Personal & business accounts.", icon: BankAccountIcon },
    { title: "Cards", desc: "Debit, credit and prepaid solutions.", icon: CardIcon },
    { title: "Loans", desc: "Flexible borrowing options.", icon: LoanIcon },
    { title: "Savings & Investments", desc: "Grow your wealth smartly.", icon: SavingsIcon },
    { title: "Insurance", desc: "Protect what matters most.", icon: ShieldIcon },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Ways to Bank
        </h2>

        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4">
                <item.icon />
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------------- */
/* SVG ICON COMPONENTS    */
/* ---------------------- */

function BankAccountIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M4 6l8-4 8 4M4 10v10h16V10" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 8.25h19.5m-16.5 3h4.5m6 0h.008m-9 3h4.5m6 0h.008M3.75 6h16.5A1.5 1.5 0 0121.75 7.5v9A1.5 1.5 0 0120.25 18H3.75A1.5 1.5 0 012.25 16.5v-9A1.5 1.5 0 013.75 6z"
      />
    </svg>
  );
}

function LoanIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6v12m-6-6h12M4 4h16v16H4z"
      />
    </svg>
  );
}

function SavingsIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3v18m-9-9h18M4 12a8 8 0 0116 0"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3l8 4v6c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z"
      />
    </svg>
  );
}
