import React from 'react'

import { VideoGrid } from '../VideoGrid/VideoGrid';
import { VideoGridItem } from '../VideoGridItem/VideoGridItem';


export const SideList = ({ related }) => {

  related.length && console.log(related)

  setTimeout(function (related) {
    return related ? (
      related.id ? (
        <>
          <p>222</p>
          <VideoGrid>
            {
              related[0].id.videoId && related.map((related) => {
                return (
                  <VideoGridItem
                    id={related.id.videoId}
                    key={related.id.videoId}
                    title={related.id.snippet.channelTitle}
                    src={"https://dol.ismcdn.jp/mwimgs/c/8/1080m/img_c8dad835c4b9134b067cc8b8efcab22f143142.jpg"} />
                )
              })
            }
          </VideoGrid>
        </>
      ) : <p>Loading...</p>
    ) : (<p>データの取得に失敗しました</p>)
  }, 2000);
  return <p>jjj</p>

}
