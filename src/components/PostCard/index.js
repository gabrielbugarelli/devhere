import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

//components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  caption: {
    marginRight: theme.spacing(0)
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24'
  },
  image: {
    height: 300,
    width: '100%',
    maxWidth: '100%'
  },
  content: {
    padding: 0
  }
}))

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
              {'Avaliado por'}
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              {post.author.name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              {post.date}
            </Typography>
          </div>
        }
      />


      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} alt="image post" className={classes.image} />
        </CardActionArea>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

export default PostCard;