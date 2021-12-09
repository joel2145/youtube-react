import React from 'react'

import Style from "../VideoGridItem/VideoGridItem.module.scss"

export const SearchResultItem = ({ id, src, title }) => {

  const onClickSearchResult = (id) => {
    window.location.href = `/watch?v=${id}`;
  }

  return (
    <div
      className={Style.item}
      onClick={() => onClickSearchResult(id)}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </ div>
  )
}