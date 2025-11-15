export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/bank1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Travel Smart, Save Big!
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Get 50% off when you load funds onto your MoneyWallet Card for your next adventure.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg rounded-md font-medium shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
