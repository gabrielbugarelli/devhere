import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//components Material UI
import {
  Paper,
  Button,
  ListSubheader,
  ListItem,
  ListItemText
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    height: '100%',
    marginRight: theme.spacing(2)
  },

  button: {
    width: '100%'
  }
}))

const tags = [
  {
    id: 1, name: 'reactjs'
  },
  {
    id: 2, name: 'javascript'
  },
  {
    id: 3, name: 'php'
  },
  {
    id: 4, name: 'spring'
  },
  {
    id: 5, name: 'node'
  },
  {
    id: 6, name: 'angular'
  }
]

const NavBar = () => {

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Cadastre-se!
      </Button>

      <ListSubheader component="div" id="nested-list-subheader">
        {`tags em alta`}
      </ListSubheader>
      {
        tags.map((item) => (
          <ListItem dense button key={`item-${item.id}-${item.id}-${item.name}`} >
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        ))
      }
      <ListItem button> Exibir mais tags</ListItem>
    </Paper >
  )
}

export default NavBar