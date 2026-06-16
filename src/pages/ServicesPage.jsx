export default function ServicesPage() {
  const services = [
    {
      title: "Frond-End-Developer",
      description:
        "Crafting responsive, interactive websites using HTML, CSS, tailwind Css, JavaScript, Next.js, React.js",
      icon: "fas fa-code",
    },
    {
      title: "Website Maintenance",
      description:
        "Comprehensive maintenance and technical support ensuring your website runs smoothly with timely updates and troubleshooting.",
      icon: "fas fa-wrench",
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress solutions with tailored themes and plugins for enhanced website functionality and performance.",
      icon: "fas fa-wordpress",
    },
    {
      title: "E-commerce Development",
      description:
        "Building robust online stores with secure payment integration and inventory management systems.",
      icon: "fas fa-shopping-cart",
    },
    {
      title: "API Development",
      description:
        "Creating robust backend APIs with Node.js, Express, and databases for seamless integration.",
      icon: "fas fa-server",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing beautiful and intuitive user interfaces with modern design principles and Tailwind CSS.",
      icon: "fas fa-palette",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-[1200px] p-4 py-16">
        {/* Profile Section with Image */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
            {/* Profile Image */}
            <div className="flex-1 flex justify-center">
              <div className="rounded-lg overflow-hidden border-4 border-[#00E187] shadow-lg shadow-[#00E187]/30">
                <img
                  src="/img.jpg"
                  alt="Profile"
                  className="w-full max-w-sm h-auto object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%232C2C32' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%2300E187' text-anchor='middle' dy='.3em'%3EProfile Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-4 text-center md:text-left">
                Welcome to My <span className="text-[#00E187]">Services</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 1 years in WordPress, HTML, CSS, Tailwind CSS,
                JavaScript, Next.js, React and basic Python concepts. Skilled in
                creating robust, user-centric solutions that elevate digital
                platforms and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/923706300351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#00E187] text-[#1C1C22] rounded font-bold hover:bg-[#00d175] transition-colors text-center"
                >
                  Hire Me
                </a>
                <button className="px-8 py-3 border-2 border-[#00E187] text-[#00E187] rounded font-bold hover:bg-[#00E187] hover:text-[#1C1C22] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4 text-center">
            What I <span className="text-[#00E187]">Offer</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Here's what I can help you with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-[#2C2C32] rounded-xl group transition-all transform delay-200 text-white hover:border-opacity-100 border border-[#00E187] border-opacity-30 hover:shadow-lg hover:shadow-[#00E187]/20"
              >
                <i
                  className={`${service.icon} text-4xl text-[#00E187] mb-4 block group-hover:scale-110 transition-transform`}
                ></i>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00E187] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
                <div className="h-[1px] w-full bg-gray-700 mt-4"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
