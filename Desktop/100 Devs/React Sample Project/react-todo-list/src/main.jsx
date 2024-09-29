import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//In summary, this code sets up a React application by:
// Importing necessary components
// Creating a root element in the DOM
// Rendering the App component, wrapped in StrictMode, into the root element
