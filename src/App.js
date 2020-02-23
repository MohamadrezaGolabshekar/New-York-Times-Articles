import React, { useReducer } from 'react';
import './App.css';
import { Header, Title } from './components/StyledComponents';
import ArticleContainer from './container/ArticleContainer';
import SavedArticleContainer from './container/SavedArticleContainer';
import DetailArticleContainer from './container/DetailArticleContainer';
import Nav from './components/UI/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppContext } from "./Store/Store";
import { appReducer, initialState } from "./Reducer/Reducer";


function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>

        <Header>
          <Link to="/">
            <Title>Article App</Title>
          </Link>
          <Nav />
        </Header>

        <Switch>
          <Route path="/saved-Articles">
            <SavedArticleContainer />
          </Route>
          <Route path="/article-detail">
            <DetailArticleContainer />
          </Route>
          <Route path="/">
            <ArticleContainer />
          </Route>
        </Switch>

      </Router>
    </AppContext.Provider>
  );
}

export default App;
