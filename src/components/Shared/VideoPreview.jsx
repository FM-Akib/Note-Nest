import ReactPlayer from 'react-player';

const VideoPreview = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls={true} />
    </div>
  );
};

export default VideoPreview;
