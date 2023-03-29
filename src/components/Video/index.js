import React from "react";
import video2 from "../../assets/video2.mov";
const Video = () => {
  return (
    <div style={{ backgroundColor: "#edf2f8" }}>
      <video
        src={video2}
        autoPlay
        controls
        loop
        muted
        width="100%"
        style={{ backgroundColor: "#edf2f8" }}
      />
    </div>
  );
};

export default Video;
