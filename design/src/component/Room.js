import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/rooms.css";
import RoomIcons from "./RoomIcons";

function Room(props) {
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
  const handleClickedItem = () => {
    props.addProductInfo([
      { title: "Choose Headrail size", product1: "Medium", product2: "Large" },
      {
        title: "Top and Bottom Rail Color",
        type1: "Single Headrail",
        type2: "2-On-1 Headrail",
      },
      {
        title: "choose Headrail and Color",
        color1: "Fabric Wrapped",
        color2: "Brushed NicKel",
        color3: "Bronze",
      },
    ]);
  };
  const handleChairClicked = () => {
    props.addProductInfo([
      { title: "Choose Chair size", product1: "Medium", product2: "Large" },
      {
        title: "Chair Bottom Base",
        type1: "Single Base",
        type2: "Double Base",
      },
      {
        title: "choose Chair and Color",
        color1: "Bright red",
        color2: "Dark red",
        color3: "Orange",
      },
    ]);
  };
  return (
    <div className="right-side">
      <div className="room-wrapper">
        <map id="workmap" name="workmap">
          <area
            shape="rect"
            coords="50,40,400,400"
            alt="test"
            onClick={handleClickedItem}
          />
          <area
            shape="circle"
            coords="200,200,500"
            alt="test"
            onClick={handleChairClicked}
          />
        </map>
        <img
          src={activeRoom}
          alt="no available"
          useMap="#workmap"
          className="active-room"
        />
      </div>

      <button onClick={changRoom} className=" change-room">
        CHANGE ROOM
      </button>
      <div className="bottom-block">
        Apply to all windows ?<a className="yes-option">YES</a>
        <a className="no-option">NO</a>
      </div>
      <RoomIcons />
    </div>
  );
}

export default Room;
