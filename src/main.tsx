import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//https://github.com/OfficeDev/microsoft-teams-library-js/issues/1314
//https://github.com/wictorwilen/msteams-react-base-component