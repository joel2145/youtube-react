import React, { useState, UseEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

import Style from "./Header.module.scss"

const Header = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`./search?query=${term}`)
  }

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={e => setTerm(e.target.value)}
            value={term}></input>
          <button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
        </form>
      </div>
    </div>

  )
}

export default Header
