import React from 'react';
import './Navigation.css'
import { makeStyles, Grid, Switch, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent: 'space-between',
    paddingLeft: 60,
    paddingRight: 60,
    
    
  },
  
}));


const Navigation = ({dark}) => {
	const classes = useStyles();
	return(
		<Grid className={classes.root}>
			<h2 >Where in the world?</h2>
			 <FormControlLabel
		        control={<Switch 
		        color="default"
		        // checked={checked} 
		        onChange={dark} 
		        />}
		        label="Dark Mode"
		      />
		</Grid>
		);
}

export default Navigation;