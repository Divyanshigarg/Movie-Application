import React from "react";
import ReactDOM  from "react-dom/client";

import App from './App';

// ReactDOM(<App />, document.getElementById('root'));
const rootEl = document.getElementById('root')
ReactDOM.createRoot(rootEl).render(<App />)
