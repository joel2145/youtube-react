import React from 'react'

import Layout from '../components/Layout/Layout'
// import { SideList } from '../components/SideList/SideList'
import { VideoDetail } from '../components/VideoDetail/VideoDetail'

export const Watch = () => {
  return (
    <Layout>
      <VideoDetail></VideoDetail>
      {/* <SideList></SideList> */}
    </Layout>
  )
}


