// import { useState } from "react";
// import "./App.css";
// import Listtab from "./component/Listtab/Listtab";
// function App() {
//   const [count, setCount] = useState(0);
//   let [showtopPop, setShowtopPop] = useState(false);
//   let [showbottompPop, setShowbottomPop] = useState(false);
//   let [firstapp, setfirstapp] = useState("https://www.richardsancho.com/");
//   let [secondapp, setsecondapp] = useState("https://dasherandcrank.com/");

//   function getFirstApp(app) {
//     setfirstapp(app);
//     console.log(firstapp);
//   }
//   function getSecondApp(app) {
//     setsecondapp(app);
//   }
//   let arr = [
//     "https://www.richardsancho.com/",
//     "https://buerobuergel.de/",
//     "https://www.crunchyroll.com/",
//     "https://chirpley.ai/",
//     "https://admireamaze.debijenkorf.nl/",
//     "https://resume.enricmor.eu/?utm=wewantwebs",
//     "https://www.clouarchitects.com/",
//     "https://bokoko33.me/",
//     "https://www.catgenius.eu/",
//     "https://www.richardsancho.com/",
//     "https://buerobuergel.de/",
//     "https://www.richardsancho.com/",
//   ];
//   let arr2 = [
//     "https://dasherandcrank.com/",
//     "https://contra.com/freelance-industry-report-2021/",
//     "https://www.capsul-in-pro.com/home-compost-capsule/",
//     "https://www.mazdausa.com/",
//     "https://annoyingmuseum.zendesk.com/",
//   ];

//   return (
//     <div className="main-container">

//       <div className="left">
//         <div className="box">
//           <iframe
//             title="top-left"
//             style={{ width: "98%", height: "98%", margin: "1%" }}
//             src="https://nexus-top-right.netlify.app/ "
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="bottom-left"
//             style={{ width: "98%", height: "98%", margin: "1%" }}
//             src="https://nexus-top-right.netlify.app/ "
//           />
//         </div>
//       </div>

//       <div className="right">
//         <div className="box" onClick={() => setShowtopPop((prev) => !prev)}>
//           {/* {firstapp} */}
//           {showtopPop && (
//             <div className="topPop">
//               <ul>
//                 {arr.map((item) => (
//                   <Listtab fn={getFirstApp} title={item} />
//                 ))}
//               </ul>
//             </div>
//           )}
//           <iframe
//             title="top-right"

//             style={{ width: "98%", height: "50%", margin: "1%" }}
//             src={firstapp}
//           />
//         </div>

//         <div className="box" onClick={() => setShowbottomPop((prev) => !prev)}>
//           {showbottompPop && (
//             <div className="bottomPop">
//               <ul>
//                 {arr2.map((item) => (
//                   <Listtab fn={getSecondApp} title={item} />
//                 ))}
//               </ul>
//             </div>
//           )}
//           <iframe

//             title="bottom-right"
//             style={{ width: "98%", height: "50%", margin: "1%" }}
//             src={secondapp}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;









// import { useState, useEffect } from "react";
// import "./App.css";
// import Listtab from "./component/Listtab/Listtab";
// function App() {
//   const [count, setCount] = useState(0);
//   let [showtopPop, setShowtopPop] = useState(false);
//   let [showbottompPop, setShowbottomPop] = useState(false);
//   let [firstapp, setfirstapp] = useState("https://www.richardsancho.com/");
//   let [secondapp, setsecondapp] = useState("https://dasherandcrank.com/");
//   let [currentTopIndex, setCurrentTopIndex] = useState(0);
//   let [currentBottomIndex, setCurrentBottomIndex] = useState(0);

//   function getFirstApp(app) {
//     setfirstapp(app);
//     console.log(firstapp);
//   }

//   function getSecondApp(app) {
//     setsecondapp(app);
//   }
//   let arr = [
//     "https://www.richardsancho.com/",
//     "https://buerobuergel.de/",
//     "https://www.crunchyroll.com/",
//     "https://chirpley.ai/",
//     "https://admireamaze.debijenkorf.nl/",
//     "https://resume.enricmor.eu/?utm=wewantwebs",
//     "https://www.clouarchitects.com/",
//     "https://bokoko33.me/",
//     "https://www.catgenius.eu/",
//     "https://www.richardsancho.com/",
//     "https://buerobuergel.de/",
//     "https://www.richardsancho.com/",
//   ];

//   let arr2 = [
//     "https://dasherandcrank.com/",
//     "https://bokoko33.me/",
//     "https://www.capsul-in-pro.com/home-compost-capsule/",
//     "https://www.mazdausa.com/",
//     "https://annoyingmuseum.zendesk.com/",
//   ];
//   useEffect(() => {
//     const topInterval = setInterval(() => {
//       setCurrentTopIndex((prevIndex) =>
//         prevIndex === arr.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 20000);

//     const bottomInterval = setInterval(() => {
//       setCurrentBottomIndex((prevIndex) =>
//         prevIndex === arr2.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 20000);

//     return () => {
//       clearInterval(topInterval);
//       clearInterval(bottomInterval);
//     };
//   }, [currentBottomIndex, currentTopIndex]);
//   return (
//     <div className="main-container">
//       <div className="left">
//         <div className="box">
//           <iframe
//             title="top-left"
//             style={{
//               width: "98%",
//               height: "98%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src="https://nexus-top-right.netlify.app/"
//             scrolling="no"
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="bottom-left"
//             style={{
//               width: "98%",
//               height: "98%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src="https://www.exelentex.com/"
//             scrolling="no"
//           />
//         </div>
//       </div>

//       <div className="right">
//         <div
//           className="box"
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           {showtopPop && (
//             <div className="topPop">
//               <ul>
//                 {arr.map((item) => (
//                   <Listtab fn={getFirstApp} title={item} />
//                 ))}
//               </ul>
//             </div>
//           )}
//           <button onClick={() => setShowtopPop((prev) => !prev)}>
//             Right top list
//           </button>
//           <iframe
//             title="top-right"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={arr[currentTopIndex]}
//             scrolling="no"
//           />
//         </div>

//         <div
//           className="box"
//           // onClick={() => setShowbottomPop((prev) => !prev)}
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           {showbottompPop && (
//             <div className="bottomPop">
//               <ul>
//                 {arr2.map((item) => (
//                   <Listtab fn={getSecondApp} title={item} />
//                 ))}
//               </ul>
//             </div>
//           )}
//           <button onClick={() => setShowbottomPop((prev) => !prev)}>
//             Right bottom list
//           </button>
//           <iframe
//             title="bottom-right"
//             scrolling="no"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={arr2[currentBottomIndex]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;







import { useState, useEffect } from "react";
import "./App.css";
import Listtab from "./component/Listtab/Listtab";

function App() {
  const [count, setCount] = useState(0);
  let [showtopPop, setShowtopPop] = useState(false);
  let [showbottompPop, setShowbottomPop] = useState(false);
  let [firstapp, setfirstapp] = useState("https://www.richardsancho.com/");
  let [secondapp, setsecondapp] = useState("https://dasherandcrank.com/");
  let [currentTopIndex, setCurrentTopIndex] = useState(0);
  let [currentBottomIndex, setCurrentBottomIndex] = useState(0);

  function getFirstApp(app) {
    setfirstapp(app);
    console.log(firstapp);
  }

  function getSecondApp(app) {
    setsecondapp(app);
  }

  function handleTopListSelection(item) {
    const index = arr.indexOf(item);
    setCurrentTopIndex(index);
    setShowtopPop(false);
  }

  function handleBottomListSelection(item) {
    const index = arr2.indexOf(item);
    setCurrentBottomIndex(index);
    setShowbottomPop(false);
  }

  let arr = [
    "https://www.richardsancho.com/",
    "https://buerobuergel.de/",
    "https://www.crunchyroll.com/",
    "https://chirpley.ai/",
    "https://admireamaze.debijenkorf.nl/",
    "https://resume.enricmor.eu/?utm=wewantwebs",
    "https://www.clouarchitects.com/",
    "https://bokoko33.me/",
    "https://www.catgenius.eu/",
    "https://www.richardsancho.com/",
    "https://buerobuergel.de/",
    "https://www.richardsancho.com/",
  ];

  let arr2 = [
       "https://dasherandcrank.com/",
    "https://bokoko33.me/",
    "https://www.capsul-in-pro.com/home-compost-capsule/",
    "https://www.mazdausa.com/",
    "https://annoyingmuseum.zendesk.com/",
  ];

  useEffect(() => {
    const topInterval = setInterval(() => {
      setCurrentTopIndex((prevIndex) =>
        prevIndex === arr.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    const bottomInterval = setInterval(() => {
      setCurrentBottomIndex((prevIndex) =>
        prevIndex === arr2.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, [currentBottomIndex, currentTopIndex]);

  return (
    <div className="main-container">
      <div className="left">
        <div className="box">
          <iframe
            title="top-left"
            style={{
              width: "98%",
              height: "98%",
              margin: "1%",
              overflow: "hidden",
            }}
            src="https://aidtaas.com/"
            scrolling="no"
          />
        </div>
        <div className="box">
          <iframe
            title="bottom-left"
            style={{
              width: "98%",
              height: "98%",
              margin: "1%",
              overflow: "hidden",
            }}
            src="https://pi.aidtaas.com/dashboard"
            scrolling="no"
          />
        </div>
      </div>

      <div className="right">
        <div
          className="box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {showtopPop && (
            <div className="topPop">
              <ul>
                {arr.map((item) => (
                  <Listtab
                    key={item}
                    title={item}
                    fn={handleTopListSelection}
                  />
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => setShowtopPop((prev) => !prev)}>
            Right top list
          </button>
          <iframe
            title="top-right"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={arr[currentTopIndex]}
            scrolling="no"
          />
        </div>

        <div
          className="box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {showbottompPop && (
            <div className="bottomPop">
              <ul>
                {arr2.map((item) => (
                  <Listtab
                    key={item}
                    title={item}
                    fn={handleBottomListSelection}
                  />
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => setShowbottomPop((prev) => !prev)}>
            Right bottom list
          </button>
          <iframe
            title="bottom-right"
            scrolling="no"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={arr2[currentBottomIndex]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;




