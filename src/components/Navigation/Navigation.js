import React from 'react';
import { makeStyles, Grid, Switch, FormControlLabel, Paper} from '@material-ui/core';

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
		<Grid >
			<Paper className={classes.root} elevation={0} variant="outlined">
				<h2 >Where in the world?</h2>
				 <FormControlLabel
			        control={<Switch 
			        color="default"
			        // checked={checked} 
			        onChange={dark} 
			        />}
			        label="Dark Mode"
			      />
		  </Paper>
		</Grid>
		);
}

export default Navigation;