// import React from "react";
// import { HelloWorldStyle } from "./hello-world-style";
// const HelloWorldComponent = () =>{

//     return (
//     <HelloWorldStyle>

  
    
//     <h1>Sri Eshwar</h1>
//     <table border="1">
//         <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Department</th>
//         </tr>
//         <tr>
//             <td>1</td>
//             <td>Nithya</td>
//             <td>CSE</td>
//         </tr>
//     </table>
//       </HelloWorldStyle>
//     );
// };
// export default HelloWorldComponent;


import React from "react";
import { HelloWorldStyle } from "./HelloWorldStyle"
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
      </div>
    </HelloWorldStyle>
  );
};