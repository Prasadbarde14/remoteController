// import React, { useState, useEffect } from "react";
// import {useLocation} from "react-router-dom"
// import "./castingscreendropdown.css";

// const CastingScreensDropdown = ({ tvNumber }) => {
//   const location = useLocation()
//   const websiteUrls = [
//     "https://edo.aidtaas.com/",
//     "https://izak.aidtaas.com",
//    " https://museo.aidtaas.com",
//    " https://around.aidtaas.com",
//    " https://gofema.aidtaas.com",
//     "https://amplyfund.aidtaas.com",
//     "https://nexusconnects.ai/",
//   ];

  
//     const [selectedUrls, setSelectedUrls] = useState(() => {
//       const storedUrls = localStorage.getItem(`tv${tvNumber}`);
//       return storedUrls ? JSON.parse(storedUrls) : [];
//     });
  
//     const handleCheckboxChange = (url) => {
//       setSelectedUrls((prevSelected) =>
//         prevSelected.includes(url)
//           ? prevSelected.filter((selectedUrl) => selectedUrl !== url)
//           : [...prevSelected, url]
//       );
//     };
  
//     useEffect(() => {
//       localStorage.setItem(`tv${tvNumber}`, JSON.stringify(selectedUrls));
//     }, [selectedUrls, tvNumber]);
  

//   return (
//     <div className="castingscreen-dropdown">
//       {websiteUrls.map((url) => (
//         <li key={url} >
//           <input
//             type="checkbox"
//             className="urlcheckbox"
//             id={url}
//             checked={selectedUrls.includes(url)}
//             onChange={() => handleCheckboxChange(url)}
//           />
//           <label htmlFor={url}>{url}</label>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default CastingScreensDropdown;






import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./castingscreendropdown.css";

const CastingScreensDropdown = ({ tvNumber }) => {
  const location = useLocation();
  const websiteUrls = [
    "https://edo.aidtaas.com/",
    "https://izak.aidtaas.com",
    "https://museo.aidtaas.com",
    "https://around.aidtaas.com",
    "https://gofema.aidtaas.com",
    "https://amplyfund.aidtaas.com",
    "https://nexusconnects.ai/",
  ];

  const [selectedUrls, setSelectedUrls] = useState(() => {
    if (location.pathname === "/") {
      const storedUrls = localStorage.getItem(`tv${tvNumber}`);
      return storedUrls ? JSON.parse(storedUrls) : [];
    } else {
      return [];
    }
  });

  const handleCheckboxChange = (url) => {
    setSelectedUrls((prevSelected) =>
      prevSelected.includes(url)
        ? prevSelected.filter((selectedUrl) => selectedUrl !== url)
        : [...prevSelected, url]
    );
  };

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem(`tv${tvNumber}`, JSON.stringify(selectedUrls));
    }
  }, [selectedUrls, tvNumber, location.pathname]);

  return (
    <div className="castingscreen-dropdown">
      {websiteUrls.map((url) => (
        <li key={url}>
          <input
            type="checkbox"
            className="urlcheckbox"
            id={url}
            checked={selectedUrls.includes(url)}
            onChange={() => handleCheckboxChange(url)}
          />
          <label htmlFor={url}>{url}</label>
        </li>
      ))}
    </div>
  );
};

export default CastingScreensDropdown;
