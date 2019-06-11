import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
  console.log(video)
  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item" title={video.snippet.title}>
      <div className="video-list media">
        <div className="media-left">
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="media-object"/>
        </div>
        <div className="media-body pl-3">
          <div className="media-heading">
            {video.snippet.title.length < 50 ? video.snippet.title : `${video.snippet.title.substring(0,50)}...`}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
