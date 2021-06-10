import React from 'react';
import SimpleCard from '../Card/Card';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
	gridContainer: {
		paddingLeft: "40px",
		paddingRight: "40px",
		paddingTop: "10px",
	},

   
});

const CardList = ({countries, click}) =>{
	const classes = useStyles();
	return(	  
			<div style={{ padding: 24 }}> 
			   	<Grid container spacing={6} className={classes.gridContainer} justify="center" >
					{
						countries.map((user,i) =>{
						return(
								<Grid key ={i} item xs={12} sm={6} md={4} lg={3}>
									<SimpleCard 
									key={i}
									flagurl={countries[i].flag}
									name={countries[i].name}
									population={countries[i].population}
									region={countries[i].region}
									capital={countries[i].capital}
									click={click}
									/>
								</Grid>
							);
					    })
					} 
				</Grid>
			</div> 
		  );
}  

export default CardList;