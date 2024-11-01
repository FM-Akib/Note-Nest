import ReactPlayer from 'react-player';
import '../../App.css';
const VideoPreview = ({ url }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
};

export default VideoPreview;
