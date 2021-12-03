import React, { useContext, useEffect } from 'react'

import Layout from '../components/Layout/Layout'
import { fetchPopularData } from "../api/index"
import { Store } from "../store/index";
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem.js';


export const Top = () => {
  // eslint-disable-next-line no-unused-vars
  const { globalState, setGlobalState } = useContext(Store);

  // 最初に人気動画を取得
  useEffect(() => {
    fetchPopularData().then((res) => {
      setGlobalState({ type: 'SET_POPULAR', payload: { popular: res.data.items } })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    < Layout >
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                title={popular.snippet.title}
                src={popular.snippet.thumbnails.medium.url} />
            )
          })
        }
      </VideoGrid>
    </Layout >
  )
}


