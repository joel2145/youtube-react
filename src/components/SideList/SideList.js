import React, { useContext, useEffect } from 'react'

import { fetchRelatedData } from '../../api';
import { Store } from '../../store';
import { SideListItem } from '../SideListItem/SideListItem';

export const SideList = () => {

  const { globalState, setGlobalState } = useContext(Store);

  const setRelatedVideo = async (id) => {

    // 選択された動画の関連動画の配列をglobalStateに追加する
    fetchRelatedData(id).then((res) => {
      setGlobalState({ type: "SET_RELATED", payload: { related: res.data.items } })
    });
  }

  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected])

  globalState.related.length && console.log(globalState.related)

  return globalState.related.length ? (
    // <p>ddd</p>
    <>
      <p>222</p>
      {
        globalState.related && globalState.related.map((video) => {
          console.log(video.snippet.channelTitle)
          return (
            // <p>oooo</p>
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              title={video.id.videoId}
              src={"kk"} />
          )
        })
      }
    </>
  ) : (<p>kkk</p>)

}
