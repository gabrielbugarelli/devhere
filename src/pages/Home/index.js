import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//components
import Header from './components/Header'
import Feed from './components/Feed'
import NavBar from './components/NavBar'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  }
})

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <NavBar />
        <Feed />
      </main>
    </div>
  )
}

export default Home