// import React from "react";
// import { NavbarStyle } from "./navbar-style";
// import logo from "../assets/image.png";      // your logo
// import heroImage from "../assets/image2.jpg"; // your hero image

// const Navbar = () => {
//   return (
//     <NavbarStyle>
//       {/* ===== NAVBAR ===== */}
//       <div className="navbar">
//         <div className="left">
//           <img src={logo} alt="logo" />
//           <h3>Velora Living</h3>
//         </div>

//         <div className="center">
//           <h4>Home</h4>
//           <h4>Explore</h4>
//           <h4>About Us</h4>
//           <h4>Trending</h4>
//           <h4>Contact</h4>
//         </div>

//         <div className="right">
//           <h4 className="signin">Sign In</h4>
//           <button className="register">Register</button>
//         </div>
//       </div>

//       {/* ===== HERO SECTION ===== */}
//       <div className="hero">
//         <div className="hero-left">
//           <h1>
//             Furniture That <br />
//             <span>Elevates Your Space</span>
//           </h1>

//           <p>Crafted for comfort. Designed for modern living.</p>

//           <div className="buttons">
//             <button className="shop">Shop Now</button>
//             <button className="arrival">Check New Arrivals</button>
//           </div>
//         </div>

//         <div className="hero-right">
//           <img src={heroImage} alt="room" />
//         </div>
//       </div>
//     </NavbarStyle>
//   );
// };

// export default Navbar;
import React from "react";
import { NavbarStyle } from "./navbar-style";
import logo from "../assets/image.png";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="navbar">
        {/* LEFT */}
        <div className="left">
          <img src={logo} alt="logo" />
          <h3>Velora Living</h3>
        </div>

        {/* CENTER */}
        <div className="center">
          <h4>Home</h4>
          <h4>Explore</h4>
          <h4>About Us</h4>
          <h4>Trending</h4>
          <h4>Contact</h4>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h4 className="signin">Sign In</h4>
          <button className="register">Register</button>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

