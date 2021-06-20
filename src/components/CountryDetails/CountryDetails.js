import React from 'react';
import {Typography, makeStyles, Grid, Button, Box} from '@material-ui/core';

const useStyles = makeStyles({
   img: {
    minWidth: 300,
    maxHeight: 450,
  },

  gridContainer: {
    paddingLeft: "45px",
    paddingRight: "20px",
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
    fontWeight: 600,
    paddingLeft: "22px",
  },

  buttonContainer: {
    marginLeft: "5px",
    marginTop: "4px",
  },

  bold: {
    fontWeight: 600
  },

  buttonBox: {
    marginLeft: "18px",
  },

  bbox: {
      marginTop: "8px",
      fontWeight: 600
    },
  
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
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Native Name:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].nativeName}
                  </Typography >
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Population:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].population}
                  </Typography >
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Ragion:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].subregion}
                  </Typography >
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Capital:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].capital}
                  </Typography >
                </Box>
              </Box>
            </Grid> 
            <Grid item xs container direction="column" >
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Top Level Domain:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].topLevelDomain}
                  </Typography >
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Currencies:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].currencies[0].name}
                  </Typography >
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <Typography variant="body1" className={classes.bold}>
                    Languages:
                  </Typography >
                </Box>
                <Box p={1} >
                  <Typography >
                    {countries[0].languages[0].name}
                  </Typography >
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="row" p={1} m={1} className={classes.buttonBox}>
              <Typography className={classes.bbox}>
                  Border Countries: 
              </Typography>
              <Grid item xs container direction="row" >
              {countries[0].borders.map((country,i) =>{
                return(
                      <Button key={i} className={classes.buttonContainer} variant="outlined" onClick={() => borderclick(countries[0].borders[i])}>
                      {countries[0].borders[i]
                      }
                      </Button>
              );
              })}
              </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountryDetails;