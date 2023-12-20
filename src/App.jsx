import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { RootRoute } from "./routes";


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRoute />
      </PersistGate>
    </Provider>
  );
};

export default App;
