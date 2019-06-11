import React from 'react';

const VideoDetail = ({video}) => {

  if(!video){
    return (
      <div className="text-center m-5">Loading....</div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responisive-item"></iframe>
      </div>
      <div className="details">
        <div className="title my-2 h5">{video.snippet.title}</div>
        <div className="desc">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
