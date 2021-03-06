import React, { useState } from "react";
// import muteICON from "../assets/images/ICONS/Mute.svg";
// import unmuteICON from "../assets/images/ICONS/Unmute.svg";
import arrowdownICON from "../assets/images/ICONS/Arrowdown.svg";
import bgLogo from "../assets/images/Logos/BgLogo.png";
import { useCallback } from "react";

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

  // const onToggleBgSound = useCallback(() => {
  //   let vid = document.getElementById("vid-bg");
  //   vid.muted = !vid.muted;
  //   localStorage.setItem("sound", vid.muted);
  //   let soundState = vid.muted;
  //   this.setState({ isSoundOff: soundState });
  // }, []);

  const handleNextVideo = useCallback(() => {
    setStateCurrentVideoIndex((prevState) => {
      if (prevState === videos.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  }, []);

  return (
    <div className="vid-container">
      <video
        className="vid-bg video-for-full-width"
        id="vid-bg"
        autoPlay
        preload="auto"
        playsInline
        onEnded={handleNextVideo}
        muted={stateIsSoundOff}
        style={{ width: 100 + "%", height: 100 + "%" }}
        key={[stateCurrentVideoIndex + videos[stateCurrentVideoIndex]]}
      >
        <source src={videos[stateCurrentVideoIndex]} />
      </video>
      <video
        className="vid-bg video-for-phone"
        id="vid-bg"
        autoPlay
        preload="auto"
        playsInline
        onEnded={handleNextVideo}
        muted={stateIsSoundOff}
        loop
        style={{ width: 100 + "%", height: 100 + "%" }}
        key={[stateCurrentVideoIndex + videoForPhone[stateCurrentVideoIndex]]}
      >
        <source
          className="video-for-phone"
          src={videoForPhone[stateCurrentVideoIndex]}
        />
      </video>
      {/* <div onClick={onToggleBgSound} className={"sound-enable"}>
        {stateIsSoundOff ? (
          <img src={muteICON} alt=""></img>
        ) : (
          <img src={unmuteICON} alt=""></img>
        )}
      </div> */}
      <div>
        <img className="continue" src={arrowdownICON} alt=""></img>
      </div>
      <div>
        <img className="bg-logo" src={bgLogo} alt="" />
      </div>
      <a href="https://api.whatsapp.com/send?phone=972548233442">
        <button className="videobtn">???????????? ??????????</button>{" "}
      </a>
    </div>
  );
};

export default React.memo(VideoBG);
