import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowScrollBtn(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showScrollBtn && (
      <button onClick={scrollToTop} style={styles}>
        ↑ Back to top
      </button>
    )
  );
}

const styles = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "6px",
  backgroundColor: "#489554",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 1000
};

export default ScrollToTopBtn;   