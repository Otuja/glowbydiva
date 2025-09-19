export default function Services() {
  const services = [
    {
      category: "Manicures",
      items: [
        {
          name: "Classic Manicure",
          description: "Nail trimming, shaping, cuticle care, soothing hand massage, and your choice of polish for a polished, elegant look."
        },
        {
          name: "Gel Manicure",
          description: "Long-lasting gel polish cured under UV/LED light, ensuring a chip-free, glossy finish for up to three weeks."
        },
        {
          name: "French Manicure",
          description: "Timeless style with a natural base and crisp white tips, perfect for any occasion."
        },
        {
          name: "Spa Manicure",
          description: "A luxurious experience with exfoliation, paraffin wax, and extended massage for ultimate relaxation."
        }
      ]
    },
    {
      category: "Pedicures",
      items: [
        {
          name: "Classic Pedicure",
          description: "Foot soak, nail trimming, shaping, cuticle care, callus removal, massage, and polish for refreshed feet."
        },
        {
          name: "Gel Pedicure",
          description: "Durable gel polish for toes, offering a vibrant, long-lasting shine."
        },
        {
          name: "Spa Pedicure",
          description: "Indulgent treatment with aromatherapy, scrubs, masks, or hot stone massage for deep relaxation."
        },
        {
          name: "Medical Pedicure",
          description: "Focused on foot health, addressing issues like ingrown nails or calluses with expert care."
        }
      ]
    },
    {
      category: "Nail Enhancements",
      items: [
        {
          name: "Acrylic Nails",
          description: "Custom extensions for added length and durability, tailored to your desired style."
        },
        {
          name: "Gel Extensions",
          description: "Natural-looking extensions with hard gel, offering flexibility and strength."
        },
        {
          name: "Dip Powder Nails",
          description: "Powder-based technique for vibrant, long-lasting color without UV light."
        },
        {
          name: "Silk/Fiberglass Wraps",
          description: "Lightweight overlays to strengthen or repair natural nails."
        }
      ]
    },
    {
      category: "Nail Art",
      items: [
        {
          name: "Custom Nail Art",
          description: "Hand-painted designs, glitter, rhinestones, chrome effects, or 3D embellishments to express your unique style."
        },
        {
          name: "Trending Designs",
          description: "From ombre to marble or minimalist patterns, stay on-trend with our creative artistry."
        }
      ]
    },
    {
      category: "Specialty Treatments",
      items: [
        {
          name: "Paraffin Wax Treatment",
          description: "Warm wax therapy to hydrate and soften hands or feet, leaving skin silky smooth."
        },
        {
          name: "Hydrating Masks",
          description: "Moisturizing hand or foot masks infused with essential oils for nourishment."
        },
        {
          name: "Callus Removal",
          description: "Specialized treatment to smooth rough skin on feet for a polished finish."
        }
      ]
    },
    {
      category: "Nail Care & Maintenance",
      items: [
        {
          name: "Nail Fills",
          description: "Refresh grown-out acrylic or gel extensions every 2–3 weeks for a flawless look."
        },
        {
          name: "Nail Repair",
          description: "Expert fixes for cracked, chipped, or broken nails."
        },
        {
          name: "Polish Change",
          description: "Quick refresh of nail color without a full manicure or pedicure."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-pink-600 text-center mb-8">Our Services</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          At Nail Luxury, we offer a range of premium nail care services designed to pamper and enhance your natural beauty.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">{service.category}</h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item.name}>
                    <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/booking"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-pink-700"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}