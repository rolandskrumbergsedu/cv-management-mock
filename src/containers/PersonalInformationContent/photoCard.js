import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';

const styles = {
  card: {
    width: '80%',
  },
  media: {
    height: '80%',
  },
};

function PhotoCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
            <FaceIcon fontSize="large"></FaceIcon>
        </CardMedia>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Upload new
        </Button>
      </CardActions>
    </Card>
  );
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoCard);
