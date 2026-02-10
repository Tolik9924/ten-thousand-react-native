import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "../src/navigation/RootNavigator";
import { queryClient } from "../src/queryClient";
import { persistor, store } from "../src/redux/store";
import "../src/translations/i18n";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
