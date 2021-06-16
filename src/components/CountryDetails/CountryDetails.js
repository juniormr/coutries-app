import React from 'react';
import {Typography, makeStyles, Grid, Button} from '@material-ui/core';

const useStyles = makeStyles({
   img: {
    minHeight: 100,
    minWidth: 300,
    paddingRight: "40px",
  },

  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "60px",
  },

  detailsContainer:{
    paddingRight: "40px",
    paddingTop: "20px",
  },

  bordersContainer:{
    paddingRight: "40px",
    paddingTop: "20px",
  },

   infoContainer:{
    paddingTop: "20px",
    fontWeight: 600
  },

  buttonContainer: {
    marginLeft: "10px",
    marginTop: "4px",
  },

  bold: {
    fontWeight: 600
  }
  
});

const CountryDetails = ({countries, borderclick}) =>  {
const classes = useStyles();  

  return (
    <div className={classes.gridContainer} >
      <Grid container spacing={0} direction="row"> 
        <Grid item xs container spacing={1}>       
              <img className={classes.img} alt="flagurl" src={countries[0].flag} />
        </Grid>
        <Grid item xs lg container direction="column" > 
                  <Typography variant="h6" className={classes.infoContainer}>
                    {countries[0].name}
                  </Typography>
          <Grid container spacing={0} direction="row" className={classes.detailsContainer}> 
            <Grid item xs container direction="column" >
                    <Typography variant="body1" className={classes.bold}>
                      Native Name:
                    </Typography >
                    <Typography variant="body1" className={classes.bold}>
                      Population: 
                    </Typography>
                    <Typography variant="body1" className={classes.bold}>
                      Region: 
                    </Typography>
                    <Typography variant="body1" className={classes.bold}>
                      Capital: 
                    </Typography>
            </Grid> 

             <Grid item xs container direction="column" >
                    <Typography >
                      {countries[0].nativeName}
                    </Typography >
                    <Typography variant="body1" >
                      {countries[0].population}
                    </Typography>
                    <Typography variant="body1">
                      {countries[0].subregion}
                    </Typography>
                    <Typography variant="body1">
                      {countries[0].capital}
                    </Typography>
            </Grid>
            <Grid item xs container direction="column" >
                    <Typography variant="body1" className={classes.bold}>
                      Top Level Domain: 
                    </Typography>
                    <Typography variant="body1" className={classes.bold}>
                      Currencies: 
                    </Typography>
                    <Typography variant="body1" className={classes.bold}>
                      Languages: 
                    </Typography>
            </Grid>
            <Grid item xs container direction="column" >
                    <Typography variant="body1">
                      {countries[0].topLevelDomain}
                    </Typography>
                    <Typography variant="body1">
                      {countries[0].currencies[0].name}
                    </Typography>
                    <Typography variant="body1">
                      {countries[0].languages[0].name}
                    </Typography>
            </Grid> 
          </Grid>
          <Grid item xs container direction="row"  alignItems="center" className={classes.bordersContainer}>
              <Typography >
                  Border Countries: 
              </Typography>

              {countries[0].borders.map((country,i) =>{
                return(
                      <Button key={i} className={classes.buttonContainer} variant="outlined" onClick={() => borderclick(countries[0].borders[i])}>
                      {countries[0].borders[i]
                      }
                      </Button>
              );
              })}
              
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryDetails;