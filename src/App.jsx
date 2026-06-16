import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#1C1C22] text-white min-h-screen">
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "resume" && <ResumePage />}
    </div>
  );
}
