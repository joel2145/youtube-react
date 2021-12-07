import React, { useContext, useEffect } from 'react'

import { fetchRelatedData } from '../../api';
import { Store } from '../../store';
import { SideListItem } from '../SideListItem/SideListItem';

export const SideList = () => {

  const { globalState, setGlobalState } = useContext(Store);

  const setRelatedVideo = async (id) => {

    // 選択された動画の関連動画の配列をglobalStateに追加する
    fetchRelatedData(id).then((res) => {
      // これは配列↓
      const dataArray = res.data.items;
      for (var i = 0; i < dataArray.length; i++) {
        if (!dataArray[i].hasOwnProperty('snippet')) {
          dataArray.splice(i, 1)
        }
      }
      setGlobalState({ type: "SET_RELATED", payload: { related: dataArray } })
    });
  }

  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected])

  return globalState.related.length ? (
    <>
      {
        globalState.related && globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              title={video.snippet.title}
              src={video.snippet.thumbnails.standard.url} />
          )
        })
      }
    </>
  ) : (<p>データの取得に失敗しました</p>)
}
