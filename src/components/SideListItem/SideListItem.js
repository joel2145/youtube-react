import React from 'react'
import { Link } from "react-router-dom";

import Style from "./SideListItem.module.scss"

export const SideListItem = ({ id, src, title }) => {
  return (
    <Link className={Style.item} to={{ pathname: "watch", search: `?v=${id}` }} >
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link >
  )
}