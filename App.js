import React from 'react';
import { Provider } from "react-redux";
import MusicofyNavigation from './App/Navigation/Navigation';
import { store } from "./App/Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
        <MusicofyNavigation />
    </Provider>
  );
};

export default App;