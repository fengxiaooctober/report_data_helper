import React, { Component } from 'react';
import './App.css';

import { Toolbar } from './components/toolbar';
import { TabsWithTables } from './components/tabsWithTables';

class App extends Component {
  render() {
    return [
      <Toolbar key="toolbar" />,
      <TabsWithTables key="tabs-with-tables" />,
    ];
  }
}

export default App;
