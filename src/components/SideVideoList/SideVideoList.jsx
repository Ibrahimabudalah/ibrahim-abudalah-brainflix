import React from "react";
import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";

function SideVideoList({ list }) {
  return (
    <div className="lisst">
      <h4 className="lisst__header">NEXT VIDEOS</h4>
      {list.map((video) => {
        return <SideVideo video={video} key={video.id} />;
      })}
    </div>
  );
}

export default SideVideoList;
