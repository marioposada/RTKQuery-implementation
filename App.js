import React from "react";
import AppNavigator from "./src/navigation/tabnavigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
