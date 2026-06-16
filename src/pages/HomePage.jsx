export default function HomePage({ navigateTo }) {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-[1200px] p-4">
        {/* Hero Section with Profile Image */}
        <section className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-[#00E187]"> MUhammad Umair</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Full Stack Developer & Creative Problem Solver
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigateTo("services")}
                  className="px-8 py-3 bg-[#00E187] text-[#1C1C22] rounded font-bold hover:bg-[#00d175] transition-colors"
                >
                  View My Work
                </button>
                <a
                  href="https://wa.me/923706300351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#00E187] text-[#1C1C22] rounded font-bold hover:bg-[#00d175] transition-colors text-center"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center">
              <div className="rounded-lg overflow-hidden border-2 border-[#00E187] shadow-lg shadow-[#00E187]/30">
                <img
                  src="/img.jpg"
                  alt="Profile"
                  className="w-full max-w-md h-auto object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%232C2C32' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%2300E187' text-anchor='middle' dy='.3em'%3EProfile Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 border-t border-[#00E187] border-opacity-30">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate developer with expertise in building modern web
            applications. I focus on creating clean, efficient, and
            user-friendly solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-16 border-t border-[#00E187] border-opacity-30">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Frontend", "Backend", "Database"].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-[#2C2C32] rounded border border-[#00E187] border-opacity-30 hover:border-opacity-100 transition-all"
              >
                <h4 className="text-xl font-bold text-[#00E187] mb-4">
                  {skill}
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Professional Tools</li>
                  <li>• Best Practices</li>
                  <li>• Modern Frameworks</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="py-16 border-t border-[#00E187] border-opacity-30"
        >
          <h3 className="text-3xl font-bold mb-6">Featured Work</h3>
          <p className="text-gray-300 text-lg">
            Check out my services to see what I can help you with.
          </p>
        </section>
      </div>
    </main>
  );
}
