import React, { Component } from 'react';
import './App.css';
import TaaTable from './components/TaaTable';

/** Redux */
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import ExampleComponent from './components/Example.component';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaaTable />
      </Provider>
    );
  }
}

export default App;
