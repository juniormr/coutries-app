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
  const [name, setName] = useState('');
  const [border, setBorder] = useState('');
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
    primary: {
  
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

  const onClick = (countryname) => {
    setClicked(!clicked)
    setName(countryname)
  }

   const onBackclick = () => {
    setClicked(!clicked)
    setName('')
    setBorder('')
    setSearchregion('')
  }

  const onBorderClick = (name) => {
    setBorder(name)
  }

  const onDarkmode = () => {
    setDarkmode(!darkmode)
  }

  const filteredcountries = countries.filter(country => {

    if(!name){
      if(country.region){
        return country.name.toLowerCase().includes(searchfield.toLowerCase()) && country.region.toLowerCase().includes(searchregion.toLowerCase());
      }

      else{
        return country.name.toLowerCase().includes(searchfield.toLowerCase());
      }
    }

    else if(border) {
        return country.alpha3Code.toLowerCase().includes(border.toLowerCase());
      }

    else{  
        return country.name.toLowerCase().includes(name.toLowerCase());
    }
    })

    return (
      (
        <div>
          <ThemeProvider theme={theme}>
          <CssBaseline />
            <Navigation dark={onDarkmode}/>
            { clicked

                ? <div>
                    <BackButton back={onBackclick} />
                    <CountryDetails countries={filteredcountries} borderclick={onBorderClick}/>
                  </div>

                :

                  <div>
                    <SearchBox searchChange={onSearchChange} searchRegion={onSearchRegion} />
                    <CardList countries={filteredcountries} click={onClick}/>
                  </div>
            }

          </ThemeProvider>
        </div>
        )
      );
  }

export default App;
