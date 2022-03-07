import React from "react";
import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";

function SideVideoList({ list }) {
  return (
    <div className="list">
      <h4 className="list__header">NEXT VIDEOS</h4>
      {list.map((video) => {
        return <SideVideo video={video} key={video.id} />;
      })}
    </div>
  );
}

export default SideVideoList;
