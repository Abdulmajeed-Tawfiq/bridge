import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main>
      <div className="text">
        <h2>ESTATE AGENCY OPERATIONS MEETS AI</h2>
        <p>Smarter Communication, Smoother Property Transactions</p>
      </div>
      <div className="image">
        {isSmallScreen ? (
          <img
            src="/assets/homePhone.png"
            alt="home image for smaller screens"
          />
        ) : (
          <img src="/assets/home.png" alt="home image for larger screens" />
        )}
      </div>
    </main>
  );
}

export default Home;
