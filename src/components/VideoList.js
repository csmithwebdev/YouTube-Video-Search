import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

	const renderedList = videos.map((video) => { //map over videos array, this inner function video will be called once on each video. Now that weve looped through the array we have single video data. Lets pass that video data down to a new prop called VideoItem below so we can use it in our VideoItem component.

		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;

};

export default VideoList;