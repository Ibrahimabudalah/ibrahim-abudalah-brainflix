import React from "react";
import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";

function SideVideoList({ list, selectedVideo }) {
  // console.log("sidevideo list", list);
  // console.log("sidevideo list eventhandler", eventHandler)
  return (
    <div className="list">
      <h4 className="list__header">NEXT VIDEOS</h4>
      {list.map((video) => {
        return (
          <SideVideo
            video={video}
            selectedVideo={selectedVideo}
            key={video.id}
          />
        );
      })}
    </div>
  );
}

export default SideVideoList;
