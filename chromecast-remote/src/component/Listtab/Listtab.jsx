// import React from 'react'

// const Listtab = ({title,fn}) => {
//   return (
//     <li onClick={()=>fn(title)} >
//       {title}
//     </li>
//   )
// }

// export default Listtab



// Listtab.js
import React from "react";

function Listtab({ title, fn }) {
  return (
    <li onClick={() => fn(title)}>
      {title}
    </li>
  );
}

export default Listtab;

