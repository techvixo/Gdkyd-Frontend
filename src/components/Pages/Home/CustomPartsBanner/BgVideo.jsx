"use client"
import bgVideo from "../../../../../public/assets/videos/video.mp4";

const BgVideo = () => {
  return (
    <div>
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  )
}

export default BgVideo