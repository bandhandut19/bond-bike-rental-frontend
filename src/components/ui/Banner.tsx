import ReactPlayer from "react-player";

const Banner = () => {
  return (
    <div>
      <ReactPlayer
        url="/coverr-bikers-driving-away-down-a-path-9981-1080p.mp4"
        playing
        loop
        muted
        width="auto"
        height="auto"
        controls={false}
      />
    </div>
  );
};

export default Banner;
