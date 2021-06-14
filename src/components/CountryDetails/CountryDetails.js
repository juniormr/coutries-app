import React from 'react';
import {Typography, makeStyles, Grid, Button} from '@material-ui/core';

const useStyles = makeStyles({
   img: {
    margin: 'auto',
    display: 'block',
    minWidth: 200,
    maxWidth: 600
  },

  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "60px",
  },
  
});

const CountryDetails = ({countries, borderclick}) =>  {
const classes = useStyles();  

  return (
    <div className={classes.gridContainer} >
      <Grid container spacing={2} direction="row"> 
        <Grid item>       
              <img className={classes.img} alt="flagurl" src={countries[0].flag} />
        </Grid>
        <Grid item xs container direction="column"> 
                  <Typography >
                    {countries[0].name}
                  </Typography>

          <Grid container spacing={2} direction="row"> 
            <Grid item xs container direction="column" >
                    <Typography >
                      {countries[0].nativeName}
                    </Typography>
                    <Typography variant="body2">
                      Population: {countries[0].population}
                    </Typography>
                    <Typography variant="body2">
                      Region: {countries[0].subregion}
                    </Typography>
                    <Typography variant="body2">
                      Capital: {countries[0].capital}
                    </Typography>
            </Grid> 
            <Grid item xs container direction="column" >
                    <Typography >
                      Top Level Domain: {countries[0].topLevelDomain}
                    </Typography>
                    <Typography variant="body2">
                      Currencies: {countries[0].currencies[0].name}
                    </Typography>
                    <Typography variant="body2">
                      Languages: {countries[0].languages[0].name}
                    </Typography>
            </Grid> 
          </Grid>
          <Grid item xs container direction="row" justify="center" alignItems="center">
              {countries[0].borders.map((country,i) =>{
                return(
                      <Button key={i} variant="outlined" onClick={() => borderclick(countries[0].borders[i])}>
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