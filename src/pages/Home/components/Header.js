import React from 'react'
import { Button } from '@material-ui/core'

const Header = () => {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <a href="/">DevHere</a>
        </div>
        <div>
          <Button variant="contained" color="primary">Novo Post</Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  )
}

export default Header
