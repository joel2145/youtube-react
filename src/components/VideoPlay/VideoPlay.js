import React from 'react';
import Youtube from "react-youtube";

export const VideoPlay = ({ id }) => {
  return (
    <div>
      <Youtube videoId={id}></Youtube>
    </div>
  )
}
