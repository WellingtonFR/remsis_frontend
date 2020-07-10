import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "../components/Header";

import Home from "../pages/Home";
import FiliaisCreate from "../pages/FiliaisCreate";
import FiliaisIndex from "../pages/FiliaisIndex";
import FiliaisUpdate from "../pages/FiliaisUpdate";
import TransferenciaIndex from "../pages/TransferenciaIndex";
import TransferenciaCreate from "../pages/TransferenciaCreate";
import TransferenciaUpdate from "../pages/TransferenciaUpdate";
import TransferenciaReport from "../pages/TransferenciaReport";
import TransportadorCreate from "../pages/TransportadorCreate";
import TransportadorIndex from "../pages/TransportadorIndex";
import TransportadorUpdate from "../pages/TransportadorUpdate";
import ConferenteIndex from "../pages/ConferenteIndex";
import ConferenteCreate from "../pages/ConferenteCreate";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import BackupDB from "../pages/BackupDB";

export default function Routes() {
  const isAuthenticated = () => localStorage.getItem("token") !== null;

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          {/*Filial*/}
          <PrivateRoute exact path="/filiais" component={FiliaisIndex} />
          <PrivateRoute path="/filiais/create" component={FiliaisCreate} />
          <PrivateRoute path="/filiais/update/:id" component={FiliaisUpdate} />
          {/*Transferencia */}
          <PrivateRoute
            exact
            path="/transferencia"
            component={TransferenciaIndex}
          />
          <PrivateRoute
            path="/transferencia/create"
            component={TransferenciaCreate}
          />
          <PrivateRoute
            path="/transferencia/update/:id"
            component={TransferenciaUpdate}
          />
          <PrivateRoute
            path="/transferencia/report/:id"
            component={TransferenciaReport}
          />
          {/*Transportador*/}
          <PrivateRoute
            exact
            path="/transportador"
            component={TransportadorIndex}
          />
          <PrivateRoute
            path="/transportador/create"
            component={TransportadorCreate}
          />
          <PrivateRoute
            path="/transportador/update/:id"
            component={TransportadorUpdate}
          />
          {/*Conferente*/}
          <PrivateRoute exact path="/conferente" component={ConferenteIndex} />
          <PrivateRoute
            path="/conferente/create"
            component={ConferenteCreate}
          />

          {/*Login*/}
          <Route exact path="/login" component={Login} />
          <Route exact path="/backupDB" component={BackupDB} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
