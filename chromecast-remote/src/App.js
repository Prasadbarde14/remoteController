import { useState, useEffect } from "react";
import "./App.css";
import Listtab from "./component/Listtab/Listtab";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  let [showtopPop, setShowtopPop] = useState(false);
  let [showbottompPop, setShowbottomPop] = useState(false);
  let [currentTopIndex, setCurrentTopIndex] = useState(0);
  let [currentBottomIndex, setCurrentBottomIndex] = useState(0);
  function handleTopListSelection(item) {
    console.log("handleTopListSelection item : ", item);
    const index = topTvList.indexOf(item);
    setCurrentTopIndex(index);
    const data = [
      {
        device_ip: "192.168.0.50",
        device_name: "shubham",
        url: topTvList[currentTopIndex],
      },
    ];

    fetch(
      "https://ig.gaiansolutions.com:443/utility-service/stream/data/push?deviceId=COMMAND&host=192.168.28.11&port=80",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        console.log("response : ", response.json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowtopPop(false);
  }

  function handleBottomListSelection(item) {
    const index = BottomTvList.indexOf(item);
    setCurrentBottomIndex(index);
    const data = [
      {
        device_ip: "192.168.0.5",
        device_name: "shubham",
        url: BottomTvList[currentBottomIndex],
      },
    ];

    fetch(
      "https://ig.gaiansolutions.com:443/utility-service/stream/data/push?deviceId=COMMAND&host=192.168.28.11&port=80",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        console.log("response : ", response.json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowbottomPop(false);
  }

  let topTvList = [
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

  let BottomTvList = [
    "https://dasherandcrank.com/",
    "https://bokoko33.me/",
    "https://www.capsul-in-pro.com/home-compost-capsule/",
    "https://www.mazdausa.com/",
    "https://annoyingmuseum.zendesk.com/",
  ];

  useEffect(() => {
    const topInterval = setInterval(() => {
      setCurrentTopIndex((prevIndex) =>
        prevIndex === topTvList.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    const bottomInterval = setInterval(() => {
      setCurrentBottomIndex((prevIndex) =>
        prevIndex === BottomTvList.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, [currentBottomIndex, currentTopIndex]);
  const startCasting = async () => {
    try {
      const response = await fetch(
        "https://ig.gaiansolutions.com:443/utility-service/stream/data/push?deviceId=COMMAND&host=192.168.28.11&port=80",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              name: "9",
              device_ip: "192.168.0.35",
              url: "https://npmjs.com/",
            },
            {
              name: "15",
              device_ip: "192.168.0.99",
              url: "https://aidtaas.com/",
            },
          ]),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // Log the response data if needed
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  document.addEventListener("click", () => {});

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
                {topTvList.map((item, i) => (
                  <Listtab
                    key={item + i}
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
            src={topTvList[currentTopIndex]}
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
                {BottomTvList.map((item) => (
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
            src={BottomTvList[currentBottomIndex]}
          />
        </div>
      </div>
      <button onClick={startCasting}>Start Casting on all screens</button>
    </div>
  );
}

export default App;
