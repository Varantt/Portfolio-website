import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {Loading} from './components/Loading/Loading'
import './index.css'

const AsyncApp = React.lazy(() => import ('./App'));
;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <AsyncApp />
    </Suspense>
  </React.StrictMode>
);
