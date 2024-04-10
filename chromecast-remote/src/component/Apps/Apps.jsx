import React, {  useState } from "react";
import add_btn from "./images/plus.svg";
import right_arrow from "./images/right-arrow.svg";

import ArrowDown_btn from "./images/Arrow Down 1.svg";
import "./Apps.css";
import CastingScreensDropdown from "../CastingScreenDropdown/CastingScreensDropdown";
import { useNavigate } from "react-router-dom";
const Apps = () => {
  let [opendropdown, setOpenDropDown] = useState("");
  let navigate = useNavigate();
  function OpenDropDown(container) {
    setOpenDropDown(container);
  }
  return (
    <div className="Apps_Parent">
      <div className="topheader">
        <img
          src={add_btn}
          alt="close_btn"
          className="Apps_Plus_Btn"
          onClick={() => navigate("/addurl")}
        />
        <img
          src={right_arrow}
          alt="Right_Arrow"
          className="Apps_RightArrow_Btn"
          onClick={() => navigate("/grid")}
        />
        {/* <span className="Apps_Header_Content">Apps</span> */}
      </div>
      <div
        className="Apps_Screens_Header"
        onClick={() => OpenDropDown("Dropdown-1")}
      >
        <p className="Apps_Screens_Header_Content">TV1</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-1"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-1"
        style={
          opendropdown === "Dropdown-1" ? { height: "auto" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} tvNumber={1}/>
      </div>
      <div
        className="Apps_Screens_Header"
        onClick={() => OpenDropDown("Dropdown-2")}
      >
        <p className="Apps_Screens_Header_Content">TV2</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-2"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-2"
        style={
          opendropdown === "Dropdown-2" ? { height: "auto" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} tvNumber={2}/>
      </div>
      <div
        className="Apps_Screens_Header"
        onClick={() => OpenDropDown("Dropdown-3")}
      >
        <p className="Apps_Screens_Header_Content">TV3</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-3"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-3"
        style={
          opendropdown === "Dropdown-3" ? { height: "auto" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} tvNumber={3}/>
      </div>

      <div
        className="Apps_Screens_Header"
        onClick={() => OpenDropDown("Dropdown-4")}
      >
        <p className="Apps_Screens_Header_Content">TV4</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-4"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-4"
        style={
          opendropdown === "Dropdown-4" ? { height: "auto" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} tvNumber={4}/>
      </div>
      <div
        className="Apps_Screens_Header"
        onClick={() => OpenDropDown("Dropdown-5")}
      >
        <p className="Apps_Screens_Header_Content">TV5</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-5"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-5"
        style={
          opendropdown === "Dropdown-5" ? { height: "auto" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} tvNumber={5}/>
      </div>
    </div>
  );
};

export default Apps;
