import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Loading } from "./components/Loading/Loading";
import "./index.css";

const AsyncApp = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./App")), 1000);
    })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <AsyncApp />
    </Suspense>
  </React.StrictMode>
);
