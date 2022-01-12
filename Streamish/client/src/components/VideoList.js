import React, { useEffect, useState } from "react";
import Video from './Video';
import Comment from "./Comment";
import { getAllVideos } from "../modules/videoManager";
import { getWithComments } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getWithComments().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos.map((video) => (
                    <>
                        <Video video={video} key={video.id} />
                        {video.comments.map((comment) => (<Comment comment={comment} key={comment.id} />))}
                    </>
                ))}
            </div>
        </div>
    );
};

export default VideoList;