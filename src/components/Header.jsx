import { useState } from "react";

export default function Header({ currentPage, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services" },
    { label: "Resume", page: "resume" },
    { label: "Work", page: "work" },
  ];

  return (
    <header className="container w-full bg-[#1C1C22] text-white shadow sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center max-w-[1200px] p-4">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <h1 className="flex justify-center items-center text-5xl font-bold">
            <b>Uma</b>
            <b className="text-[#00E187]">ir::</b>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => navigateTo(item.page)}
                  className={`hover:text-[#00E187] hover:underline transition-colors ${
                    currentPage === item.page ? "text-[#00E187]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923706300351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 bg-[#00E187] text-[#1C1C22] rounded-full hover:bg-[#00d175] transition-colors font-bold">
                  Hire Me
                </button>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          <i className={`fas fa-${mobileMenuOpen ? "times" : "bars"}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2C2C32] p-4 border-t border-[#00E187]">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => {
                    navigateTo(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`hover:text-[#00E187] w-full text-left ${
                    currentPage === item.page ? "text-[#00E187]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923706300351"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full px-6 py-2 bg-[#00E187] text-[#1C1C22] rounded-lg hover:bg-[#00d175] transition-colors font-bold">
                  Hire Me
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
