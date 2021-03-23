import React from 'react';
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import NoImage from "../../assets/img/noimage.png";
import { deleteCharacter } from "../../reducks/characters/operations";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px",
    [theme.breakpoints.up("sm")]: {
      width: "calc(25% - 32px)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(50% - 32px)"
    },
  },
  media: {
    height: 0,
    paddingTop: "100%",
    cursor: "pointer"
  },
  content: {
    cursor: "pointer"
  },
  name: {
    color: theme.palette.text.primary,
    fontSize: "1.7rem",
    textAlign: "center"
  },
  action: {
  },
  button: {
    marginLeft: "auto"
  }
}))


export const CharacterCard = ({ id, path, name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const image = path ? path : NoImage;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
        onClick={() => dispatch(push(`/character/edit/${id}`))}
      />
      <CardContent className={classes.content} onClick={() => dispatch(push(`/character/edit/${id}`))}>
        <Typography
          className={classes.name} color="textSecondary" component="h1"
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          className={classes.button}
          size="small" color="secondary"
          onClick={() => dispatch(deleteCharacter(id, name))}
        >
          <DeleteIcon /> 削除する
        </Button>
      </CardActions>
    </Card>
  )
};