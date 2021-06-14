import React from 'react';
import { makeStyles, Button, Grid } from '@material-ui/core';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

const useStyles = makeStyles({
 gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },  
});

const BackButton = ({back}) =>  {
  const classes = useStyles();  
  return (
  
    <Grid className={classes.gridContainer} >
      <Button 
        variant="contained"
        
        size="small"
        startIcon={<KeyboardBackspaceRoundedIcon />}
        onClick={back}
      >
        Back
      </Button>
    </Grid>
  
  );
}

export default BackButton;