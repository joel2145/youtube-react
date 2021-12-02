import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';

import { fetchSelectedData } from "../../api/index";
import { Store } from "../../store/index";
import Layout from '../Layout/Layout';
import { VideoGrid } from '../VideoGrid/VideoGrid';

export const VideoDetail = () => {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { globalState, setGlobalState } = useContext(Store);

  const setSelectedVideo = async () => {
    // 選択された動画のidを取得する
    const serchParams = new URLSearchParams(location.search)
    const id = serchParams.get("v");

    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift()
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } })
    });
  }

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    < Layout >
      <VideoGrid>
        {/* {
          globalState.selected && globalState.selected.map((selected) => {
            return (
              <VideoGridItem
                id={selected.id}
                key={selected.id}
                title={selected.snippet.title}
                src={selected.snippet.thumbnails.medium.url} />
            )
          })
        } */}
      </VideoGrid>
    </Layout >
  )
}
