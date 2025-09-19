

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-16 px-4 bg-gradient-to-b from-pink-100 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-4">
          Luxury Nails by [Your Brand]
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl">
          Experience the art of luxury nail care. Indulge in premium treatments,
          elegant designs, and a relaxing atmosphere.
        </p>
        <a
          href="/booking"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-700 transition"
        >
          Book Your Appointment
        </a>
      </section>

      {/* About Preview */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
          About Us
        </h2>
        <p className="text-gray-700 mb-6">
          At [Your Brand], we blend artistry and care to deliver a luxury nail
          experience. Our certified technicians use the finest products and
          latest techniques to ensure your nails look and feel their best.
        </p>
        <a
          href="/about"
          className="text-pink-600 font-semibold underline hover:text-pink-700"
        >
          Learn More
        </a>
      </section>

      {/* Services Preview */}
      <section className="bg-pink-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2">Luxury Manicure</h3>
              <p className="text-gray-600">
                Pamper your hands with our signature treatments and elegant
                finishes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2">Spa Pedicure</h3>
              <p className="text-gray-600">
                Relax and rejuvenate with our soothing spa pedicures.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2">Custom Nail Art</h3>
              <p className="text-gray-600">
                Express your style with bespoke designs from our talented
                artists.
              </p>
            </div>
          </div>
          <a
            href="/services"
            className="mt-8 inline-block text-pink-600 font-semibold underline hover:text-pink-700"
          >
            View All Services
          </a>
        </div>
      </section>



      {/* Call to Action */}
      <section className="bg-pink-600 py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Treat Yourself?
        </h2>
        <a
          href="/booking"
          className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-100 transition"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}
