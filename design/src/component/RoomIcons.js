import React from "react";
import { BsHeart, BsReplyAll, BsFillEnvelopeFill } from "react-icons/bs";
import "./css/icons.css";

function RoomIcons() {
  return (
    <div className="icon-block">
      <button className="icon-wrapper heart-wrapper">
        <BsHeart className="symbole" />
      </button>
      <button className="icon-wrapper">
        <BsReplyAll className="symbole" />
      </button>
      <button className="icon-wrapper">
        <BsFillEnvelopeFill className="symbole" />
      </button>
    </div>
  );
}

export default RoomIcons;
