// import React from "react";
// import { CategoriesStyle } from "./categories-style";

// // Import your category images
// import diningImg from "../assets/chair.png";
// import sofaImg from "../assets/sofa.png";
// import bedImg from "../assets/bed.png";

// const categories = [
//   { id: 1, title: "Dining Sets", img: diningImg },
//   { id: 2, title: "Sofas & Seating", img: sofaImg },
//   { id: 3, title: "Beds & Mattresses", img: bedImg },
// ];

// const Categories = () => {
//   return (
//     <CategoriesStyle>
//       <h2>Explore Our Categories</h2>
//       <p>Start building the home you’ve always imagined</p>

//       <div className="cards">
//         {categories.map((cat) => (
//           <div className="card" key={cat.id}>
//             <img src={cat.img} alt={cat.title} />
//             <div className="overlay">
//               <p>{cat.title}</p>
//               <span>&rarr;</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </CategoriesStyle>
//   );
// };

// export default Categories;

import React from "react";
import { CategoriesStyle } from "./categories-style";

// Import category images
import diningImg from "../assets/chair.png";
import sofaImg from "../assets/sofa.png";
import bedImg from "../assets/bed.png";

const categories = [
  { id: 1, title: "Dining Sets", img: diningImg },
  { id: 2, title: "Sofas & Seating", img: sofaImg },
  { id: 3, title: "Beds & Mattresses", img: bedImg },
];

const Categories = () => {
  return (
    <CategoriesStyle>
      <h2>Explore Our Categories</h2>
      <p>Start building the home you’ve always imagined</p>

      <div className="cards">
        {categories.map((cat) => (
          <div className="card" key={cat.id}>
            <img src={cat.img} alt={cat.title} />
            <div className="overlay">
              <p>{cat.title}</p>
              <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </CategoriesStyle>
  );
};

export default Categories;
