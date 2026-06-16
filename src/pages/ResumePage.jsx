export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-[1200px] p-4 py-16">
        <h2 className="text-5xl font-bold mb-4">
          My <span className="text-[#00E187]">Resume</span>
        </h2>

        {/* Experience */}
        <section className="mt-12">
          <h3 className="text-3xl font-bold text-[#00E187] mb-8">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-[#00E187] pl-6">
              <h4 className="text-xl font-bold">Senior Developer</h4>
              <p className="text-[#00E187]">Pixelizio | 2025</p>
              <p className="text-gray-300 mt-2">
                Developed and maintained multiple full-stack applications using
                modern technologies.
              </p>
            </div>
            <div className="border-l-4 border-[#00E187] pl-6">
              <h4 className="text-xl font-bold">Full Stack Developer</h4>
              <p className="text-[#00E187]">Pixelizio | 2025 - 26</p>
              <p className="text-gray-300 mt-2">
                Built responsive web applications and optimized backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-12">
          <h3 className="text-3xl font-bold text-[#00E187] mb-8">Education</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-[#00E187] pl-6">
              <h4 className="text-xl font-bold">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-[#00E187]"> GCUF Faisalabad | 2021 - 2025</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-12">
          <h3 className="text-3xl font-bold text-[#00E187] mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3">Frontend</h4>
              <p className="text-gray-300">
                React, HTML , Tailwind CSS, JavaScript, TypeScript
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Backend</h4>
              <p className="text-gray-300">Node.js, Express, Basic Python</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Tools</h4>
              <p className="text-gray-300">Git </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Other</h4>
              <p className="text-gray-300">REST APIs , Testing</p>
            </div>
          </div>
        </section>

        {/* Download Resume */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="px-8 py-3 bg-[#00E187] text-[#1C1C22] rounded font-bold hover:bg-[#00d175] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
