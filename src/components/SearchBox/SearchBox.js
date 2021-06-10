import React from 'react';
import { makeStyles, TextField, InputAdornment, InputLabel, FormControl, Select} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent: 'space-between',
    paddingLeft: "64px",
    paddingRight: "64px",
    paddingTop: "35px",
    // width: 400,
  },
  
}));


const SearchBox = ({searchfield,searchregion,searchChange,searchRegion}) =>  { 
  const classes = useStyles();
  return(
    <nav className={classes.root} >
      <form  noValidate autoComplete="off">
        <TextField    id="outlined-basic" 
                      placeholder="Search for a country..."
                      variant="outlined"
                      onChange={searchChange} 
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        )}}
        />
      </form>
      <FormControl variant="outlined" size="small">
          <InputLabel>.</InputLabel>
          <Select
            native
            onChange={searchRegion}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value=""></option>
            <option value={'africa'}>Africa</option>
            <option value={'america'}>Americas</option>
            <option value={'asia'}>Asia</option>
            <option value={'europe'}>Europe</option>
            <option value={'oceania'}>Oceania</option>
          </Select>
      </FormControl>
  </nav>
    );
}

export default SearchBox;