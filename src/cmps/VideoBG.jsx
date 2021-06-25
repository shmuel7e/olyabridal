import React, { useState } from "react";
import muteICON from "../assets/images/ICONS/Mute.svg";
import unmuteICON from "../assets/images/ICONS/Unmute.svg";
import arrowdownICON from "../assets/images/ICONS/Arrowdown.svg";
import bgLogo from "../assets/images/Logos/BgLogo.png";

const videos = [
  "https://thumbs.gfycat.com/UnfortunateFearlessCrustacean-mobile.mp4",
];
const videoForPhone = [
  "https://thumbs.gfycat.com/NiftyImpureErmine-mobile.mp4",
];

const VideoBG = (props) => {
  const [stateIsSoundOff] = useState(
    localStorage.getItem("sound")
      ? JSON.parse(localStorage.getItem("sound"))
      : true
  );

  const [stateCurrentVideoIndex, setStateCurrentVideoIndex] = useState(0);

  const onToggleBgSound = () => {
    let vid = document.getElementById("vid-bg");
    vid.muted = !vid.muted;
    localStorage.setItem("sound", vid.muted);
    let soundState = vid.muted;
    this.setState({ isSoundOff: soundState });
  };

  const handleNextVideo = () => {
    setStateCurrentVideoIndex((prevState) => {
      if (prevState === videos.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <div className="vid-container">
      <video
        className="vid-bg video-for-full-width"
        id="vid-bg"
        autoPlay
        playsinline
        onEnded={handleNextVideo}
        muted={stateIsSoundOff}
        style={{ width: 100 + "%", height: 100 + "%" }}
        key={[stateCurrentVideoIndex + videos[stateCurrentVideoIndex]]}
      >
        <source src={videos[stateCurrentVideoIndex]} type="video/mp4" />
      </video>
      <video
        className="vid-bg video-for-phone"
        id="vid-bg"
        autoPlay
        playsinline
        onEnded={handleNextVideo}
        muted={stateIsSoundOff}
        loop
        style={{ width: 100 + "%", height: 100 + "%" }}
        key={[stateCurrentVideoIndex + videoForPhone[stateCurrentVideoIndex]]}
      >
        <source
          className="video-for-phone"
          src={videoForPhone[stateCurrentVideoIndex]}
          type="video/mp4"
        />
      </video>
      <div onClick={onToggleBgSound} className={"sound-enable"}>
        {stateIsSoundOff ? (
          <img src={muteICON} alt=""></img>
        ) : (
          <img src={unmuteICON} alt=""></img>
        )}
      </div>
      <div>
        {" "}
        <img className="continue" src={arrowdownICON} alt=""></img>
      </div>
      <div>
        <img className="bg-logo" src={bgLogo} alt="" />
      </div>
      <a href="https://api.whatsapp.com/send?phone=9720508152063">
        {" "}
        <button className="videobtn">לקביעת פגישה</button>{" "}
      </a>
    </div>
  );
};

export default VideoBG;
