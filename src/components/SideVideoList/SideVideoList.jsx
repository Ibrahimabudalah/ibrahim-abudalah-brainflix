import React from "react";
import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";

function SideVideoList({ list, eventHandler }) {
  console.log("sidevideo list",list);
  console.log("sidevideo list eventhandler", eventHandler)
  return (
    <div>
      {list.map((video) => {
        return (
          <SideVideo
            video={video}
            eventHandler={eventHandler}
            key={video.id}
          />
        );
      })}
    </div>
  );
}

export default SideVideoList;
