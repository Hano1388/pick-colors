import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Colors from './Colors';
import ChooseColor from './ChooseColor';
import Modal from './Modal';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Switch>
            <Route path="/" component={ChooseColor} exact/>
            <Route path="/choosecolor" component={Modal} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
