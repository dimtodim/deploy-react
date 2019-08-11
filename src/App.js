import React from 'react';
import './App.css';
import Nav from './components/Nav';
import UbaciZemlje from './components/UbaciZemlje';
import JednaZemljaInfo from './components/JednaZemljaInfo';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import style from 'styled-theming';
import useTheme from './components/useTheme';


const getBackground = style('mode', {
  light: "#eee",
  dark : "hsl(207, 26%, 17%)"
});

const getBackground2 = style('mode', {
  light: "#eee",
  dark : "hsl(209, 23%, 22%)"
});

const getForeground = style('mode', {
  light: "hsl(207, 26%, 17%)",
  dark : "#eee"
});

const GlobalStyle = createGlobalStyle`
body {
  background-color : ${getBackground};
}
.country, nav, input, select, .back {
  background-color : ${getBackground2};
}
.info_container p, .info_container h2, nav, ::placeholder, .search_countries input, .search_countries::after, .select_countries::after, select, .info-state, .back span, .theme {
  color : ${getForeground};
}
`
const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
    <Router>
    <>
    <GlobalStyle/>
    <div className="App">
      <Nav></Nav>
      <Switch>
      <Route path="/" exact component={UbaciZemlje} />
      <Route path="/JednaZemljaInfo" exact component={JednaZemljaInfo} />
      <Route path="/JednaZemljaInfo/:name" component={JednaZemljaInfo} />
      </Switch>
    </div>
    </>
    </Router>
    </ThemeProvider>
  );
}

export default App;
