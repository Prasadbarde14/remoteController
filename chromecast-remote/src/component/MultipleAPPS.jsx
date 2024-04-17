// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import "../component/grid.css";

// function Grid() {
//   let navigate = useNavigate();
//   const [count, setCount] = useState({
//     tv1: 0,
//     tv2: 0,
//     tv3: 0,
//     tv4: 0,
//     tv5: 0,
//   });
//   const [tvUrls, setTvUrls] = useState({
// tv1: JSON.parse(localStorage.getItem("tv1")),
// tv2: JSON.parse(localStorage.getItem("tv2")),
// tv3: JSON.parse(localStorage.getItem("tv3")),
// tv4: JSON.parse(localStorage.getItem("tv4")),
// tv5: JSON.parse(localStorage.getItem("tv5")),
//   });
// useEffect(()=>{
//   setTvUrls((prevUrls) => ({
//     ...prevUrls,
//     tv1: localStorage.getItem("tv1") ? JSON.parse(localStorage.getItem("tv1")) : prevUrls.tv1,
//     tv2: localStorage.getItem("tv2") ? JSON.parse(localStorage.getItem("tv2")) : prevUrls.tv2,
//     tv3: localStorage.getItem("tv3") ? JSON.parse(localStorage.getItem("tv3")) : prevUrls.tv3,
//     tv4: localStorage.getItem("tv4") ? JSON.parse(localStorage.getItem("tv4")) : prevUrls.tv4,
//     tv5: localStorage.getItem("tv5") ? JSON.parse(localStorage.getItem("tv5")) : prevUrls.tv5,
//   }));
// },[])
//   useEffect(() => {

//     const interval = setInterval(() => {
//       setCount((prev) => ({
//         ...prev,
//         tv1: prev.tv1 === tvUrls.tv1.length - 1 ? 0 : prev.tv1 + 1,
//         tv2: prev.tv2 === tvUrls.tv2.length - 1 ? 0 : prev.tv2 + 1,
//         tv3: prev.tv3 === tvUrls.tv3.length - 1 ? 0 : prev.tv3 + 1,
//         tv4: prev.tv4 === tvUrls.tv4.length - 1 ? 0 : prev.tv4 + 1,
//         tv5: prev.tv5 === tvUrls.tv5.length - 1 ? 0 : prev.tv5 + 1,
//       }));
//       CEORoomcastcall();
//     }, 80000);

//     return () => clearInterval(interval);
//   }, [tvUrls]);
//   function CEORoomcastcall() {
//     console.log("inside CEORoomcastcall------------------------");

//     const tv1Url = JSON.parse(localStorage.getItem("tv1"))[count.tv1];
//     const tv2Url = JSON.parse(localStorage.getItem("tv2"))[count.tv2];
//     const tv3Url = JSON.parse(localStorage.getItem("tv3"))[count.tv3];
//     const tv4Url = JSON.parse(localStorage.getItem("tv4"))[count.tv4];
//     const tv5Url = JSON.parse(localStorage.getItem("tv5"))[count.tv5];

//     const requestOptions = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2F2aW5hc2gtcGF0ZWwtcm9ja3oiLCJyZWNlbnRfc2Vzc2lvbiI6Ik5BIiwic3ViIjoiZ2FpYW4uY29tIiwicGFyZW50VGVuYW50SWQiOiJOQSIsImNvbG9yIjoiNjFkYWRjNGE3ZGI1NGRmMThlZDYzMzBhMWJhODJkZjYiLCJ1c2VyX25hbWUiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSIsImlzcyI6ImdhaWFuLmNvbSIsImlzQWRtaW4iOnRydWUsInBsYXRmb3JtSWQiOiI2NGUyMDdjY2Y2ZTY3OTFhNjM0ZDdkOTIiLCJ1c2VyTmFtZSI6ImFwcHNAZ2FpYW5zb2x1dGlvbnMuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwidGVuYW50SWQiOiI2NGUxZmQzZDE0NDNlYjAwMDE4Y2MyMzEiLCJsb2dvIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzLiIsImV4cCI6MTcwOTI1ODUxMiwianRpIjoiNzA4NjI3NTItMGFhNC00MWQyLTg1YzMtZjg4M2U5MWIxNTYzIiwiZW1haWwiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSJ9.LtZDiuvdwUHMGTigsr4Ph3ESKYRtyG3Aa6JVJbxmapgFwBzjc4IKAmPmNhPYcJ2U9UAVIhsDUR6O64b4RFfvOUDk7gFGc8yoZYIVKx_pS4BGijnycbaPkwRuwal3egaWHGldbnFXK5tkVMzQMsjX7Zh9RyrJ2dNR2I6so9TValGUfg3XQckqasvlhv15PIwsUA6mUzLMmGg6AC-0yfuKaLbIcXKxUVD2AiXemUKc-1dJw8peyXOhzq2ooxijgcVK6t6r1MEvXcq2xpZ2SEHfzIFa48rN3Lw03EnWcc4UgsbnGNRqk8-WxM7g3U3wkm_8hZ2L9G53B2YZBbnhrLNgjw",
//       },
//       body: JSON.stringify([
//         {
//           device_ip: "192.168.0.112",
//           device_name: "1",
//           url: tv1Url,
//           x1: "0",
//           y1: "0",
//           x2: "100",
//           y2: "100",
//           number: 1,
//         },
//         {
//           device_ip: "192.168.0.64",
//           device_name: "2",
//           url: tv2Url,
//           x1: "0",
//           y1: "0",
//           x2: "100",
//           y2: "100",
//           number: 2,
//         },
//         {
//           device_ip: "192.168.0.167",
//           device_name: "3",
//           url: tv3Url,
//           x1: "0",
//           y1: "0",
//           x2: "100",
//           y2: "100",
//           number: 3,
//         },
//         {
//           device_ip: "192.168.0.183",
//           device_name: "4",
//           url: tv4Url,
//           x1: "0",
//           y1: "0",
//           x2: "100",
//           y2: "100",
//           number: 4,
//         },
//         {
//           device_ip: "192.168.0.74",
//           device_name: "5",
//           url: tv5Url,
//           x1: "0",
//           y1: "0",
//           x2: "100",
//           y2: "100",
//           number: 5,
//         },
//         // Add similar objects for other TVs
//       ]),
//     };

//     fetch(
//       "https://ig.gaiansolutions.com/mobius-utility-service/stream/data/push?host=192.168.28.11&port=7000&deviceId=COMMAND",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => console.log(data, "data------------cast success"))
//       .catch((error) => console.error("Error:", error));
//   }

//   function startCasting() {
//     console.log("inside startCasting-----");
//   }

//   function stopCasting() {
//     console.log("inside stopCasting-----");
//   }

//   function navigateToApps() {
//     console.log("inside log------------");
//     navigate("/");
//   }

//   return (
//     <div className="main-container">
//       <div className="left">
//         <div className="box">
//           <iframe
//             title="one"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={tvUrls.tv1[count.tv1]}
//             scrolling="no"
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="two"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={tvUrls.tv2[count.tv2]}
//             scrolling="no"
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="three"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={tvUrls.tv3[count.tv3]}
//             scrolling="no"
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="four"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={tvUrls.tv4[count.tv4]}
//             scrolling="no"
//           />
//         </div>
//         <div className="box">
//           <iframe
//             title="five"
//             style={{
//               width: "98%",
//               height: "95%",
//               margin: "1%",
//               overflow: "hidden",
//             }}
//             src={tvUrls.tv5[count.tv5]}
//             scrolling="no"
//           />
//         </div>
//       </div>
//       <footer>
//         <button id="appconfigBtn" onClick={navigateToApps}>
//           App Configuration
//         </button>
//         {/* <button onClick={stopCasting} id="stopCastBtn">
//           Stop Casting
//         </button>
//         <button onClick={startCasting} id="castButton">
//           Start Casting
//         </button> */}
//       </footer>
//     </div>
//   );
// }

// export default Grid;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../component/grid.css";

function MultipleAPPS() {
  let navigate = useNavigate();
  const [count, setCount] = useState({
    tv1: 0,
    tv2: 0,
    tv3: 0,
    tv4: 0,
    tv5: 0,
  });
  const [tvUrls, setTvUrls] = useState({
    tv1: JSON.parse(localStorage.getItem("tv1")) || [],
    tv2: JSON.parse(localStorage.getItem("tv2")) || [],
    tv3: JSON.parse(localStorage.getItem("tv3")) || [],
    tv4: JSON.parse(localStorage.getItem("tv4")) || [],
    tv5: JSON.parse(localStorage.getItem("tv5")) || [],
  });

  function CEORoomcastcall(count) {
    console.log("inside CEORoomcastcall------------------------");

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2F2aW5hc2gtcGF0ZWwtcm9ja3oiLCJyZWNlbnRfc2Vzc2lvbiI6Ik5BIiwic3ViIjoiZ2FpYW4uY29tIiwicGFyZW50VGVuYW50SWQiOiJOQSIsImNvbG9yIjoiNjFkYWRjNGE3ZGI1NGRmMThlZDYzMzBhMWJhODJkZjYiLCJ1c2VyX25hbWUiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSIsImlzcyI6ImdhaWFuLmNvbSIsImlzQWRtaW4iOnRydWUsInBsYXRmb3JtSWQiOiI2NGUyMDdjY2Y2ZTY3OTFhNjM0ZDdkOTIiLCJ1c2VyTmFtZSI6ImFwcHNAZ2FpYW5zb2x1dGlvbnMuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwidGVuYW50SWQiOiI2NGUxZmQzZDE0NDNlYjAwMDE4Y2MyMzEiLCJsb2dvIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzLiIsImV4cCI6MTcwOTI1ODUxMiwianRpIjoiNzA4NjI3NTItMGFhNC00MWQyLTg1YzMtZjg4M2U5MWIxNTYzIiwiZW1haWwiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSJ9.LtZDiuvdwUHMGTigsr4Ph3ESKYRtyG3Aa6JVJbxmapgFwBzjc4IKAmPmNhPYcJ2U9UAVIhsDUR6O64b4RFfvOUDk7gFGc8yoZYIVKx_pS4BGijnycbaPkwRuwal3egaWHGldbnFXK5tkVMzQMsjX7Zh9RyrJ2dNR2I6so9TValGUfg3XQckqasvlhv15PIwsUA6mUzLMmGg6AC-0yfuKaLbIcXKxUVD2AiXemUKc-1dJw8peyXOhzq2ooxijgcVK6t6r1MEvXcq2xpZ2SEHfzIFa48rN3Lw03EnWcc4UgsbnGNRqk8-WxM7g3U3wkm_8hZ2L9G53B2YZBbnhrLNgjw",
      },
      body: JSON.stringify([
        {
          device_ip: "192.168.0.112",
          device_name: "1",
          url: tvUrls.tv1[count.tv1],
          x1: "0",
          y1: "0",
          x2: "100",
          y2: "100",
          number: 1,
        },
        {
          device_ip: "192.168.0.64",
          device_name: "2",
          url: tvUrls.tv2[count.tv2],
          x1: "0",
          y1: "0",
          x2: "100",
          y2: "100",
          number: 2,
        },
        {
          device_ip: "192.168.0.167",
          device_name: "3",
          url: tvUrls.tv3[count.tv3],
          x1: "0",
          y1: "0",
          x2: "100",
          y2: "100",
          number: 3,
        },
        {
          device_ip: "192.168.0.79",
          device_name: "4",
          url: tvUrls.tv4[count.tv4],
          x1: "0",
          y1: "0",
          x2: "100",
          y2: "100",
          number: 4,
        },
        {
          device_ip: "192.168.0.74",
          device_name: "5",
          url: tvUrls.tv5[count.tv5],
          x1: "0",
          y1: "0",
          x2: "100",
          y2: "100",
          number: 5,
        },
      ]),
    };

    fetch(
      "https://ig.gaiansolutions.com/mobius-utility-service/stream/data/push?host=192.168.28.11&port=7000&deviceId=COMMAND",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data, "data------------cast success"))
      .catch((error) => console.error("Error:", error));
  }

  // Inside useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = {
          ...prev,
          tv1: prev.tv1 === tvUrls.tv1.length - 1 ? 0 : prev.tv1 + 1,
          tv2: prev.tv2 === tvUrls.tv2.length - 1 ? 0 : prev.tv2 + 1,
          tv3: prev.tv3 === tvUrls.tv3.length - 1 ? 0 : prev.tv3 + 1,
          tv4: prev.tv4 === tvUrls.tv4.length - 1 ? 0 : prev.tv4 + 1,
          tv5: prev.tv5 === tvUrls.tv5.length - 1 ? 0 : prev.tv5 + 1,
        };
        CEORoomcastcall(newCount);
        return newCount;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, [tvUrls]);

  // function startCasting() {
  //   console.log("inside startCasting-----");
  // }

  // function stopCasting() {
  //   console.log("inside stopCasting-----");
  // }

  function navigateToApps() {
    console.log("inside log------------");
    navigate("/");
  }

  return (
    <div className="main-container">
      <div className="left">
        <div className="box">
          <iframe
            title="one"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={tvUrls.tv1[count.tv1]}
            scrolling="no"
          />
        </div>
        <div className="box">
          <iframe
            title="two"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={tvUrls.tv2[count.tv2]}
            scrolling="no"
          />
        </div>
        <div className="box">
          <iframe
            title="three"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={tvUrls.tv3[count.tv3]}
            scrolling="no"
          />
        </div>
        <div className="box">
          <iframe
            title="four"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={tvUrls.tv4[count.tv4]}
            scrolling="no"
          />
        </div>
        <div className="box">
          <iframe
            title="five"
            style={{
              width: "98%",
              height: "95%",
              margin: "1%",
              overflow: "hidden",
            }}
            src={tvUrls.tv5[count.tv5]}
            scrolling="no"
          />
        </div>
        {/* Add iframes for other TVs */}
      </div>
      <footer>
        <button id="appconfigBtn" onClick={navigateToApps}>
          Select Multiple APP
        </button>
        {/* <button onClick={stopCasting} id="stopCastBtn">
          Stop Casting
        </button>
        <button onClick={startCasting} id="castButton">
          Start Casting
        </button> */}
        <button onClick={()=>navigate("/presentation")} id="stopCastBtn">
          Select Presentation
        </button>
      </footer>
    </div>
  );
}

export default MultipleAPPS;
