import { useState } from "react";
import "./navBar.css";

function NavBar() {
  const [activeItem, setActiveItem] = useState(null);
  const [isNavbarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavBarOpen(!isNavbarOpen);
  };

  const handleClick = (event) => {
    event.preventDefault();

    // Get all the list items
    const listItems = event.currentTarget.parentNode.children;

    // Remove the active class from all items
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("active");
    }

    // Apply the active class to the clicked item
    event.currentTarget.classList.add("active");

    // Update the state to keep track of the active item
    setActiveItem(event.currentTarget);

    // Animate the pseudo-element
    const pseudoElement = event.currentTarget.querySelector("::before");
    if (pseudoElement) {
      pseudoElement.style.left = `${event.currentTarget.offsetLeft}px`;
      pseudoElement.style.width = `${event.currentTarget.offsetWidth}px`;
    }
  };

  return (
    <nav>
      <ul className={`left`}>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={handleClick}
        >
          <a href="/">HOME</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">ABOUT</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">FEATURES</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">CONTACT US</a>
        </li>
      </ul>
      <div className="logo">
        <img src="/assets/logo2.svg" alt="logo" />
      </div>

      <ul className="right">
        <li>
          <img src="/assets/icons/insta.svg" alt="" />
        </li>
        <li>
          <img src="/assets/icons/linkedin.svg" alt="" />
        </li>
        <li>
          <img src="/assets/icons/facebook.svg" alt="" />
        </li>
        <li>
          <img src="/assets/icons/youtube.svg" alt="" />
        </li>
      </ul>
      <div className="burger-icon" onClick={toggleNavbar}>
        <img src="/assets/icons/bar.png" alt="Menu" />
      </div>
      <ul className={`${isNavbarOpen ? "opened" : "closed"}`}>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={handleClick}
        >
          <a href="/">HOME</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">ABOUT</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">FEATURES</a>
        </li>
        <li onClick={handleClick}>
          <a href="/">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
