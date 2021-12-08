import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchSearchData } from '../api';
import Layout from '../components/Layout/Layout'
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';
import { Store } from '../store';

export const Search = () => {
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store)

  const setSearchResult = async => {
    const serchParams = new URLSearchParams(location.search)
    const query = serchParams.get("query");
    console.log(query)

    fetchSearchData(query).then((res) => {
      const dataArray = res.data.items;
      for (var i = 0; i < dataArray.length; i++) {
        if (!dataArray[i].hasOwnProperty('snippet')) {
          dataArray.splice(i, 1)
        }
      }
      setGlobalState({ type: 'SET_SEARCHED', payload: { searched: dataArray } })
    });
  }

  useEffect(() => {
    setSearchResult()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return globalState.searched.length ? (
    <Layout>
      <VideoGrid>
        {
          globalState.searched && globalState.searched.map((searched) => {
            return (
              <VideoGridItem
                id={searched.id}
                key={searched.id}
                title={searched.snippet.title}
                src={searched.snippet.thumbnails.medium.url} />
            )
          })
        }
      </VideoGrid>
    </Layout>
  ) : (<p>Loading...</p>)
}
