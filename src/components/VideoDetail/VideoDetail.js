import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import ReactLinkify from 'react-linkify';

import Layout from '../Layout/Layout';
import { VideoPlay } from '../VideoPlay/VideoPlay';
import { fetchSelectedData } from "../../api/index";
import { Store } from "../../store/index";
import Style from "../VideoDetail/VideoDetail.module.scss"
import { SideList } from '../SideList/SideList';

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
      const item = res.data.items.shift()
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } })
    });
  }

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // globalState.related.length && console.log(globalState.related)

  return globalState.selected ? (
    globalState.selected.id ? (
      <>
        < Layout >
          <div className={Style.wrap}>
            <VideoPlay id={globalState.selected.id}></VideoPlay>
            <h2>{globalState.selected.snippet.title}</h2>
            <br />
            <ReactLinkify>
              <pre>{globalState.selected.snippet.description}</pre>
            </ReactLinkify>
          </div>
        </Layout >
        <SideList related={globalState.related}></SideList>
      </>
    ) : <p>Loading...</p>
  ) : (<p>データの取得に失敗しました</p>)
}
