import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchSearchData } from '../api';
import Layout from '../components/Layout/Layout'
import { SearchResultItem } from '../components/SearchResult/SearchResult';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { Store } from '../store';

export const Search = () => {
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store)

  const setSearchResult = async => {
    const serchParams = new URLSearchParams(location.search)
    const query = serchParams.get("query");

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
  }, [globalState.selected])

  return globalState.searched.length ? (
    <Layout>
      <VideoGrid>
        {
          globalState.searched && globalState.searched.map((searched) => {
            return (
              <SearchResultItem
                id={searched.id.videoId}
                key={searched.id.videoId}
                title={searched.snippet.title}
                src={searched.snippet.thumbnails.medium.url} />
            )
          })
        }
      </VideoGrid>
    </Layout>
  ) : (<p>Loading...</p>)
}
