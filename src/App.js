import React, { Component } from "react";
import Contacts from "./component/contacts/Contacts";
import Header from "./component/layout/Header";
import "./App.css";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./component/contacts/AddContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/pages/About";
import NotFound from "./component/pages/NotFound";
import Test from "./component/test/Test";
import EditContact from "./component/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <div className="container">
              <Header branding="Contact Manager" />

              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
