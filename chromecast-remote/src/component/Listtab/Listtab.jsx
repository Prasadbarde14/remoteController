import React from "react";

function Listtab({ title, fn }) {
  return (
    <li onClick={() => fn(title)} style={{cursor: 'pointer'}}>
      {title}
    </li>
  );
}

export default Listtab;

