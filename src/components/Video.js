// https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-video/

import React from 'react';
import OkuliarePreAfriku from '../assets/video-okuliare-pre-afriku.mp4';

const Video = ({ videoSrc, ...props }) => {
  const video = () => {
    if (videoSrc === 'video-okuliare-pre-afriku.mp4') {
      return OkuliarePreAfriku;
    }
    return null;
  };

  return (
    <div className="video">
      <video controls>
        <source src={OkuliarePreAfriku} type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
