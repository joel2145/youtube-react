import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';

import { fetchSelectedData } from "../../api/index";
import { Store } from "../../store/index";
import Layout from '../Layout/Layout';
import { VideoPlay } from '../VideoPlay/VideoPlay';

export const VideoDetail = () => {

  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { globalState, setGlobalState } = useContext(Store);

  const setSelectedVideo = async () => {
    // 選択された動画のidを取得する
    const serchParams = new URLSearchParams(location.search)
    const id = serchParams.get("v");

    // 選択された動画のidをglobalStateに追加する
    await fetchSelectedData(id).then((res) => {
      setGlobalState({ type: "SET_SELECTED", payload: res.data.items[0].id })
    });
  }

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    < Layout >
      <VideoPlay id={globalState.selected}></VideoPlay>
    </Layout >
  )
}
