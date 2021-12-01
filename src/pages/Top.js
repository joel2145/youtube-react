import React, { useContext, useEffect } from 'react'

import Layout from '../components/Layout/Layout'
import { fetchPopularData } from "../api/index"
import { Store } from "../store/index";

export const Top = () => {
  // eslint-disable-next-line no-unused-vars
  const { globalState, setGlobalState } = useContext(Store);

  // 最初に人気動画を取得
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log(res)
      setGlobalState({ type: "SET_POPULAR", payload: res.data.items })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      トップページです
    </Layout>
  )
}


