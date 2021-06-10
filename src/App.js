import React, {useState, useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import BackButton from './components/BackButton/BackButton';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [searchregion, setSearchregion] = useState('');
  const [clicked, setClicked] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data));
  }, [])

  const themel = createMuiTheme({
    palette:{
      type:"light"
    },
  });

  const themed = createMuiTheme({
    palette:{
      type:"dark"
    },
  });

  const theme = darkmode? themed:themel;
  

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const onSearchRegion = (event) => {
    setSearchregion(event.target.value)
  }

  const onClick = (event) => {
    setClicked(!clicked)
  }

   const onBackclick = (event) => {
    setClicked(!clicked)
  }

  const onDarkmode = (event) => {
    setDarkmode(!darkmode)
  }

  const filteredcountries = countries.filter(country=>{
    if(country.region.toLowerCase()!= null){
      return country.name.toLowerCase().includes(searchfield.toLowerCase()) && country.region.toLowerCase().includes(searchregion.toLowerCase());
    }

    else{
      return country.name.toLowerCase().includes(searchfield.toLowerCase());
    }
    })

    return (clicked) ? 
      (
        <div>
          <ThemeProvider theme={theme}>
          <CssBaseline />
            <Navigation dark={onDarkmode}/>
            <BackButton back={onBackclick} search={searchfield}/>
            <CountryDetails countries={filteredcountries} click={onClick}/>
          </ThemeProvider>
        </div>
        )
      : 
      (
        <div>
          <ThemeProvider theme={theme}>
          <CssBaseline />
            <Navigation dark={onDarkmode}/>
            <SearchBox searchChange={onSearchChange} searchRegion={onSearchRegion} />
            <CardList countries={filteredcountries} click={onClick}/>
          </ThemeProvider>
        </div>
      );
  }

export default App;
