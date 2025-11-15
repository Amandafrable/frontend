export default function BusinessHero() {
  return (
    <section className="w-full">

      {/* HERO */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/images/buss.jpg')" }}
      >
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-blue-900/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Do you run a business?
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Explore our Business Bank Accounts, Loans and Payment Solutions
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg rounded-md font-medium shadow-lg">
              TELL ME MORE
            </button>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-semibold mb-10">Quick Links</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card Component */}
            <QuickLinkCard
              title="MoneyWallet"
              desc="Login to manage your Stanbic MoneyWallet Multi-Currency Card"
            />

            <QuickLinkCard
              title="Corporate Card"
              desc="Login to manage your Stanbic Corporate Prepaid Card"
            />

            <QuickLinkCard
              title="Ockatrust Prepaid Cards"
              desc="Learn more about our Prepaid Cards"
            />
          </div>

        </div>
      </div>

    </section>
  );
}

/* -------------------------------
   Reusable Quick Link Card
-------------------------------- */
function QuickLinkCard({ title, desc }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-start gap-4">
        
        {/* REAL SVG ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="#0056FF"
          className="w-10 h-10 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5m-16.5 3h4.5m6 0h.008v.008H15v-.008zm-9 
               3h4.5m6 0h.008v.008H15v-.008zM3.75 6h16.5A1.5 1.5 0 0 1 21.75 
               7.5v9A1.5 1.5 0 0 1 20.25 18H3.75A1.5 1.5 0 0 1 2.25 
               16.5v-9A1.5 1.5 0 0 1 3.75 6z"
          />
        </svg>

        {/* TEXT */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
