import React, { useEffect } from 'react'

import Layout from '../components/Layout/Layout'
import { fetchPopularData } from "../api/index"

export const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log(res)
    });
  }, [])

  return (
    <Layout>
      トップページです
    </Layout>
  )
}


