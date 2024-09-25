import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import rootRoute from "./router/rootRoute.tsx";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" />
        <RouterProvider router={rootRoute}></RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
