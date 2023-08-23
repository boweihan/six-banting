import { useState } from "react";
import ReactHowler from "react-howler";
import music from "../assets/song.mp3";
import { TbMusic, TbMusicOff } from "react-icons/tb";

import "./Music.css";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <>
      <ReactHowler playing={isPlaying} src={music} loop={true} volume={0.5} />

      <button className="music-button" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? (
          <TbMusicOff className="music-icon" />
        ) : (
          <TbMusic className="music-icon" />
        )}
      </button>
    </>
  );
};

export default Music;
