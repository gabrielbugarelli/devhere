import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <a href="/">DevHere</a>
        </div>
        <div>
          <button>Novo Post</button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  )
}

export default Header
