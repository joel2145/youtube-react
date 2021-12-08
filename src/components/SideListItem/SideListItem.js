import React from 'react'
import { Link } from "react-router-dom";

import Style from "./SideListItem.module.scss"

export const SideListItem = ({ id, src, title }) => {

  // function doReload() {
  //   // reloadメソッドによりページをリロード
  //   window.location.reload();
  // }
  // doReload();
  return (
    <Link to={{ pathname: "", search: `?v=${id}` }} className={Style.item} >
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link >
  )
}