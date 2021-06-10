import React from 'react';
import {Card, CardContent, Typography, CardMedia, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  
});

const SimpleCard = ({countries, click}) =>  {
  const classes = useStyles();  
  return (
    <Card  variant="outlined" >
      
        <CardMedia
          className={classes.media}
          image={'a'}
        />
        <CardContent>
          <Typography className={classes.pos}>
            {'name'}
          </Typography>
          <Typography variant="body2" component="p" >
            Population: {'population'}
          </Typography>
          <Typography variant="body2" component="p">
            Region: {'region'}
          </Typography>
          <Typography variant="body2" component="p">
            Capital: {'capital'}
          </Typography>
        </CardContent>
      
    </Card>
  );
}

export default SimpleCard;