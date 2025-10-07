import Image from "next/image";
import {
  FaSpa,
  FaPaintBrush,
  FaHandSparkles,
  FaStar,
  FaLeaf,
  FaTools,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      category: "Manicures",
      icon: <FaHandSparkles className="text-3xl text-white mb-2" />,
      image: "/img/services/img1.png",
      items: [
        {
          name: "Classic Manicure",
          description:
            "Nail trimming, shaping, cuticle care, soothing hand massage, and polish.",
        },
        {
          name: "Gel Manicure",
          description:
            "Chip-free, glossy gel polish lasting up to three weeks.",
        },
        {
          name: "French Manicure",
          description: "Timeless natural base with crisp white tips.",
        },
        {
          name: "Spa Manicure",
          description:
            "Exfoliation, paraffin wax, and extended massage for relaxation.",
        },
      ],
    },
    {
      category: "Pedicures",
      icon: <FaSpa className="text-3xl text-white mb-2" />,
      image: "/img/services/img2.png",
      items: [
        {
          name: "Classic Pedicure",
          description:
            "Foot soak, trimming, shaping, cuticle care, massage, and polish.",
        },
        {
          name: "Gel Pedicure",
          description: "Durable gel polish with vibrant shine.",
        },
        // {
        //   name: "Spa Pedicure",
        //   description: "Scrubs, masks, aromatherapy, or hot stone massage.",
        // },
        // {
        //   name: "Medical Pedicure",
        //   description:
        //     "Expert care for ingrown nails, calluses, and foot health.",
        // },
      ],
    },
    {
      category: "Nail Enhancements",
      icon: <FaStar className="text-3xl text-white mb-2" />,
      image: "/img/services/img3.png",
      items: [
        {
          name: "Acrylic Nails",
          description: "Custom extensions for added length and durability.",
        },
        {
          name: "Gel Extensions",
          description:
            "Natural-looking extensions with flexibility and strength.",
        },
        // {
        //   name: "Dip Powder Nails",
        //   description:
        //     "Powder-based technique for vibrant, long-lasting color.",
        // },
        {
          name: "Silk/Fiberglass Wraps",
          description: "Lightweight overlays to strengthen or repair nails.",
        },
      ],
    },
    {
      category: "Nail Art",
      icon: <FaPaintBrush className="text-3xl text-white mb-2" />,
      image: "/img/services/img4.png",
      items: [
        {
          name: "Custom Nail Art",
          description:
            "Hand-painted designs, rhinestones, glitter, and 3D embellishments.",
        },
        {
          name: "Trending Designs",
          description: "Ombre, marble, minimalist, and seasonal patterns.",
        },
      ],
    },
    // {
    //   category: "Specialty Treatments",
    //   icon: <FaLeaf className="text-3xl text-white mb-2" />,
    //   image: "/img/services/img5.png",
    //   items: [
    //     {
    //       name: "Paraffin Wax Treatment",
    //       description: "Warm wax therapy to hydrate and soften hands or feet.",
    //     },
    //     {
    //       name: "Hydrating Masks",
    //       description: "Moisturizing masks infused with essential oils.",
    //     },
    //     {
    //       name: "Callus Removal",
    //       description: "Smooth rough skin on feet for a polished finish.",
    //     },
    //   ],
    // },
    {
      category: "Nail Care & Maintenance",
      icon: <FaTools className="text-3xl text-white mb-2" />,
      image: "/img/services/img6.png",
      items: [
        {
          name: "Nail Fills",
          description: "Refresh acrylic or gel extensions for a flawless look.",
        },
        // {
        //   name: "Nail Repair",
        //   description: "Expert fixes for cracked, chipped, or broken nails.",
        // },
        {
          name: "Polish Change",
          description: "Quick refresh of nail color without a full service.",
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-[#831843] text-center mb-8">
        Our Services
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        At GlowByDiva, we believe nail care is more than just beauty—it’s an
        experience of self-love, relaxation, and confidence. Our wide range of
        services, from classic manicures and pedicures to luxury spa
        treatments and intricate nail art, are designed to celebrate your
        unique style while ensuring the health of your nails. Every treatment
        is performed with the highest level of care, premium products, and an
        eye for detail, so that every visit leaves you feeling radiant,
        empowered, and effortlessly elegant.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.category}
            className="relative overflow-hidden group"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.category}
                fill
                className="object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay content */}
            <div className="relative p-6 text-white bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition duration-300 h-full flex flex-col">
              <div className="flex flex-col items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold">{service.category}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item.name}>
                    <h4 className="text-lg font-medium">{item.name}</h4>
                    <p className="text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
