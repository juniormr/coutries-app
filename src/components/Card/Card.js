import React from 'react';
import {Card, CardContent, Typography, CardMedia, CardActionArea, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
   media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const SimpleCard = ({flagurl,name,population,region,capital, click}) =>  {
  const classes = useStyles();  
  return (
    <Card className={classes.root} variant="outlined" >
      <CardActionArea value= {name} onClick={() => click(name)}>
        <CardMedia
          className={classes.media}
          image={flagurl}
        />
        <CardContent>
          <Typography className={classes.pos}>
            {name}
          </Typography>
          <Typography variant="body2" component="p" >
            Population: {population}
          </Typography>
          <Typography variant="body2" component="p">
            Region: {region}
          </Typography>
          <Typography variant="body2" component="p">
            Capital: {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SimpleCard;