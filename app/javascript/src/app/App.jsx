import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CosmeticLists from './CosmeticLists';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path="/" component={CosmeticLists} />
        </Switch>
      </div>
    );
  }
}

export default App;
