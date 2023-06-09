import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Timesheets from './pages/Timesheets';
import TimesheetsForm from './pages/Timesheets/Form';
import Food from './pages/Food';
import Exercise from './pages/Exercise';
import Mindfullness from './pages/Mindfullness';

const Routes: React.FC = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/'];

  const shouldDisplayHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldDisplayHeader && <Header />}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/registros" exact component={Timesheets} />
        <Route path="/registros_cadastro" exact component={TimesheetsForm} />
        <Route path="/registros_cadastro/:id" exact component={TimesheetsForm} />
        <Route path="/alimentação" exact component={Food} />
        <Route path="/exercicios" exact component={Exercise} />
        <Route path="/mindfullness" exact component={Mindfullness} />
      </Switch>
    </>
  );
};

export default Routes;
