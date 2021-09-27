import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/rooms.css";
import { BsHeart, BsReplyAll, BsFillEnvelopeFill } from "react-icons/bs";

function Room() {
  const [roomItems, setRoomItem] = useState([]);
  const [roomIndex, setRoomIndex] = useState(0);
  const [activeRoom, setActiveRoom] = useState("");
  useEffect(() => {
    axios
      .get("./assets/data/rooms.json")
      .then((response) => {
        setRoomItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(roomItems) && roomItems.length) {
      setActiveRoom(roomItems[roomIndex].image);
    }
  }, [roomItems, roomIndex]);

  const changRoom = () => {
    setRoomIndex((roomIndex + 1) % roomItems.length);
  };
  return (
    <div
      style={{ backgroundImage: `url(${activeRoom})` }}
      className="room-active"
    >
      <button onClick={changRoom} className=" change-room">
        CHANGE ROOM
      </button>
      <div className="bottom-block">
        Apply to all windows ?
        <a href="#" className="yes-option">
          YES
        </a>
        <a href="#" className="no-option">
          NO
        </a>
      </div>
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
    </div>
  );
}

export default Room;
